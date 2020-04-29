var synth = window.speechSynthesis;
let currentText = '';
export const stopSpeech = () => {
  synth.pause();
}
export const cancelSpeech = () => {
  currentText = '';
  synth.cancel();
}
export const playSpeech = text => {
  if(currentText !== text) {
    cancelSpeech()
    var utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  else {
    synth.resume();
  }
  currentText = text;
}
