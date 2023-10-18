/**
 * To evict the cache, we arbitrarily remove one quarter of the cache when the
 * app uses 90% or more of its storage quota. While an LRU cache would be more
 * efficient, it would require a secondary cache since Cache doesn't keep
 * timestamps. In an experiment, a sentence with 15 words took 0.024% of the
 * available storage, so we will evict very infrequently. Hence, we take the
 * simplest approach.
 */
async function evictCache(cache: Cache) {
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
  let backendURL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  let request = new Request(
    backendURL + "/tts?" + new URLSearchParams("phrase=" + phrase)
  );
  let cache = await caches.open("tts-cache");

  let response = await cache.match(request);
  if (response === undefined) {
    console.log("Making a call to the backend");
    response = await fetch(request);
    if (response.ok) {
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
 * @returns true if the sound is played, and false otherwise
 */
export async function speakViaWebSpeechAPI(sound: string): Promise<boolean> {
  if (!window.AudioContext) {
    return false;
  }

  // Get Response by first checking cache
  let response = await requestTTS(sound);
  if (response === undefined) {
    return false;
  }

  // Play audio in response out loud
  let context = new AudioContext();

  // https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
  response
    .arrayBuffer()
    // Convert bytes to audio data
    .then((buffer) => context.decodeAudioData(buffer))
    // Create an audio source
    .then((decodedData) => {
      const source = new AudioBufferSourceNode(context);
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
