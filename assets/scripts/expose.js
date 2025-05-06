// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select'); //references horn select dropdown
  const hornImage = document.querySelector('main img'); //gets main horn image element
  const hornAudio = document.querySelector('audio'); //gets horn element

  //event listener when changing horns in drop down
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value; //gets selected value
    
    //updates image and audio depending on selected horn
    if(selected === 'air-horn'){
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    }
    else if(selected === 'car-horn'){
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    }
    else if(selected === 'party-horn'){
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  });//end of hornSelect

  const volumeSlider = document.getElementById('volume'); //gets input element for volume slider
  const volumeIcon = document.querySelector('#volume-controls img'); //gets volume icon image element

  //event listener for input when volume slider changes
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value; //gets value
    const volume = volumeValue / 100; //<audio> expects value between 0.0 and 1.0
    hornAudio.volume = volume; //sets <audio> volume

    //changes volume icon dependent on selected volume value
    if(volumeValue == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volumeValue < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volumeValue < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });//end of volumeSlider

  const playButton = document.querySelector('button');//gets play button
  const jsConfetti = new JSConfetti();//JSConfetti instance for confetti usage

  //event listener for user click on button
  playButton.addEventListener('click', () => {
    hornAudio.play();//play selected horn sound at set volume

    //checks if party horn selected
    if(hornSelect.value === 'party-horn'){
      jsConfetti.addConfetti();//launch confetti
    }
  }); //end of playButton
}