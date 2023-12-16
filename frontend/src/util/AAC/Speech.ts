import { AudioContext } from "standardized-audio-context";
import { getBackendUrl } from "../backend-url";

/**
 * To evict the cache, we arbitrarily remove one quarter of the cache when the
 * app uses 90% or more of its storage quota. While an LRU cache would be more
 * efficient, it would require a secondary cache since Cache doesn't keep
 * timestamps. In an experiment, a sentence with 15 words took 0.024% of the
 * available storage, so we will evict very infrequently. Hence, we take the
 * simplest approach.
 *
 * We cannot estimate storage capacity on some browsers, in which case
 * we just let the browser purge the whole cache periodically.
 */
async function evictCache(cache: Cache) {
  if (navigator.storage.estimate === undefined) {
    return;
  }

  let estimate = await navigator.storage.estimate();
  if (estimate.quota === undefined || estimate.usage === undefined) {
    return;
  }

  let quota_usage = (estimate.usage / estimate.quota) * 100;
  if (quota_usage < 90) {
    return;
  }

  console.log("Evicting TTS cache");

  let keys = await cache.keys();
  for (let i = 0; i < Math.ceil(keys.length / 4); i++) {
    let key = keys[Math.floor(Math.random() * keys.length)];
    cache.delete(key);
  }
}

/**
 * Returns a Response containing an mp3 speaking `phrase`. Checks the browser
 * cache to see if a Response is already saved.
 *
 */
async function requestTTS(phrase: string): Promise<Response | undefined> {
  let backendURL = getBackendUrl();
  let request = new Request(
    backendURL + "/tts?" + new URLSearchParams("phrase=" + phrase)
  );
  let cache = await caches.open("tts-cache");

  let response = await cache.match(request);
  if (response === undefined) {
    console.log("Making a call to the backend");

    try {
      response = await fetch(request);
    } catch (TypeError) {
      return undefined;
    }

    if (response && response.ok) {
      cache.put(request, response.clone());
      evictCache(cache);
    } else {
      return undefined;
    }
  }

  return response;
}

/**
 * Retrieves a voice mp3 saying `sound` from the backend, then plays the audio
 * by creating an AudioBufferSourceNode, as described here:
 * https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
 *
 * Previous calls are stored in the main thread Cache, as recommended here:
 * https://web.dev/articles/storage-for-the-web
 *
 * "Why do we cache the Response and not the AudioBuffer?"
 * The AudioBuffer is sampled according to the AudioContext, so it
 * is most reliable is we resample the AudioBuffer each call. This
 * extra processing time is not noticeable by the end user.
 *
 * "Why do I have to pass in the AudioContext?"
 * Safari will only play audio if it is the result of direct user interaction.
 * If the AudioContext is initialized in the function, Safari does not see
 * that as the result of user interaction, so it blocks the context.
 * By passing in the AudioContext, Safari allows the audio to play.
 * https://stackoverflow.com/a/31777081
 * https://stackoverflow.com/a/58354682
 *
 * @returns true if the sound is played, and false otherwise
 */
export async function speak(sound: string, __isBackendActive: boolean = true) {
  /* It is essential the context is declared first.
   * Safari will only play audio if it is the result of direct user
   * interaction. If the AudioContext is initialized after any
   * Promise, Safari does not see that as the result of user interaction,
   * so it blocks the context.
   * https://stackoverflow.com/a/31777081
   * https://stackoverflow.com/a/58354682 */

  if ((process.env.NEXT_PUBLIC_PROG_MODE as string) === "DEV" || !__isBackendActive) {
    speakViaWebSpeechAPI(sound);
    console.log(sound);
    return true;
  }

  const context = new AudioContext();

  // Get Response by first checking cache
  const response = await requestTTS(sound);

  // Use the WebSpeech API if there is an error fetching
  if (!response) {
    speakViaWebSpeechAPI(sound);
    console.log(sound);
    return true;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
  response
    .arrayBuffer()
    // Convert bytes to audio data
    .then((buffer) => context.decodeAudioData(buffer))
    // Create an audio source
    .then((decodedData) => {
      const source = context.createBufferSource();
      source.buffer = decodedData;
      source.connect(context.destination);
      return source;
    })
    // Play audio source
    .then((source) => {
      source.start(0);
    });

  return true;
}

/**
 * Uses the Web Speech API to synthesise the text contained in sound
 */
export function speakViaWebSpeechAPI(sound: string) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  let utterance = new SpeechSynthesisUtterance(sound);
  utterance.rate = +(process.env.NEXT_PUBLIC_VOICE_SPEED as string) ?? 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}
