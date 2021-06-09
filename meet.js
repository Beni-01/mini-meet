const video = document.getElementById("videos");
const closeAudio = document.getElementById("toogleVoice");
let audio = true;

const startCam = () => {
  navigator.mediaDevices
    .getUserMedia({
      audio,
      video: true,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

window.addEventListener("load", startCam, false);

closeAudio.addEventListener("click", () => {
  if (audio == false) {
    audio = true;
    closeAudio.classList.remove("green");
    closeAudio.classList.add("red");
    closeAudio.innerText = "Couper le sons";
    startCam();
  } else {
    audio = false;
    closeAudio.classList.add("green");
    closeAudio.classList.remove("red");
    closeAudio.innerText = "ouvrir le sons";
    startCam();
  }
  console.log(audio);
});
