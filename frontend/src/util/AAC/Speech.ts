export function speakViaWebSpeechAPI(sound: string) {
    if (!("speechSynthesis" in window)) {
        return;
    }

    let utterance = new SpeechSynthesisUtterance(sound);
    utterance.rate = +(process.env.NEXT_PUBLIC_VOICE_SPEED as string) ?? 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}
