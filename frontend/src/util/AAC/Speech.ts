/**
 * Retrieves a voice mp3 saying `sound` from the backend, then plays the audio
 * by creating an AudioBufferSourceNode, as described here:
 * https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
 *
 * @returns true if the sound is played, and false otherwise
 */
export function speakViaWebSpeechAPI(sound: string): boolean {
  if (!window.AudioContext) {
    return false;
  }

  let context = new AudioContext();

  // https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
  // Get mp3 bytes from backend
  try {
    fetch("http://localhost:8000/tts?" + new URLSearchParams("phrase=" + sound))
      // Retrieve bytes from response
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer();
        } else {
          throw new Error("Could not retrieve audio from backend.");
        }
      })
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
  } catch {
    return false;
  }
}
