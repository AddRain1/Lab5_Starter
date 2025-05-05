// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");
  const face = document.querySelector("img[alt='Smiling face']");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  synth.addEventListener('voiceschanged', populateVoiceList);
  populateVoiceList();

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;

    utterThis.addEventListener("end", () => {
      face.src = "assets/images/smiling.png";
    });

    face.src = "assets/images/smiling-open.png";

    synth.speak(utterThis);
    
    textInput.blur();
  });
}