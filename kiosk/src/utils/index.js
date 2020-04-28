var synth = window.speechSynthesis;
export const stopSpeech = () => {
  synth.cancel();
}
export const playSpeech = text => {
  stopSpeech()
  var utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
