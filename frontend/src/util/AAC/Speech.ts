/**
 * Uses the Web Speech API to synthesise the text contained in sound
 */
export async function speakViaWebSpeechAPI(sound: string) {
  if (!window.AudioContext) {
    return;
  }

  var context = new AudioContext();

  // https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer#playing_music
  fetch("http://localhost:8000/tts?" + new URLSearchParams("phrase=" + sound))
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((buffer) => context.decodeAudioData(buffer))
    .then((decodedData) => {
      const source = new AudioBufferSourceNode(context);
      source.buffer = decodedData;
      source.connect(context.destination);
      return source;
    })
    .then((source) => {
      source.start(0);
    });
}
