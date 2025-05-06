// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select'); //dropdown selector
  const speakButton = document.querySelector('button'); //play button
  const textArea = document.getElementById('text-to-speak'); //text field
  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices(); //import voices from local browser
    voices.forEach((voice) => { //loop, add each voice from the voices list and add to dropdown options
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
      voiceSelect.appendChild(option); //add in the option
    });
  }
  
  speechSynthesis.addEventListener('voiceschanged', populateVoices); 
  populateVoices(); //call func to add entire list of languages
  console.log(speakButton);
  speakButton.addEventListener('click', () => {
    const selectedVoiceName = voiceSelect.value;
    // console.log("Selected voice:", selectedVoiceName); //debug print
    speechSynthesis.cancel(); //stop all voices playing to prevent possible overlap / other issues
    const text = textArea.value.trim();
    const utterance = new SpeechSynthesisUtterance(text); 
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName); //search for voice
    utterance.voice = selectedVoice; //set the voice
    // const testUtterance = new SpeechSynthesisUtterance("Hello, this is a test."); //test to check if audio works
    const image = document.querySelector('img');
    utterance.onstart = () => {
        image.src = 'assets/images/smiling-open.png'; //switch to talking img when audio plays
    };
    utterance.onend = () => {
        image.src = 'assets/images/smiling.png'; //switch to smiling img
    };
    speechSynthesis.speak(utterance); //output tts
  });
}