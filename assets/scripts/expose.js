// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls').querySelector('img');
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener("change", (event) => {
    const horn = event.target.value;
    if (horn === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (horn === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (horn === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    else {
      hornImage.src = "assets/images/no-image.png";
    }
  });

  volumeSlider.addEventListener("input", (event) => {
    const volume = Number(event.target.value);
    audio.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume >= 1 && volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume >= 33 && volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else if (volume >= 67 && volume <= 100) {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
  
  playButton.addEventListener("click", (event) => {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti()
    }
  });
}