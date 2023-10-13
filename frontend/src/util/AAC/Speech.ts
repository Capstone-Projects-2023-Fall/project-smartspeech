/**
 * Uses the Web Speech API to synthesise the text contained in sound
 */
export async function speakViaWebSpeechAPI(sound: string) {
    if (!window.AudioContext) {
        return;
    }

    // var context = new AudioContext();

    // function playByteArray(bytes: ReadableStream<Uint8Array>) {
    //     var buffer = new Uint8Array( bytes.length );
    //     buffer.set( new Uint8Array(bytes), 0 );
    
    //     context.decodeAudioData(buffer.buffer, play);
    // }
    
    // function play(audioBuffer: AudioBuffer) {
    //     var source = context.createBufferSource();
    //     source.buffer = audioBuffer;
    //     source.connect( context.destination );
    //     source.start(0);
    // }
    
    let response = await fetch("https://jubilant-memory-rwvj7q64qxgfxr44-8000.app.github.dev/tts?" + new URLSearchParams("phrase=" + sound));
    console.log(response.body)
}
