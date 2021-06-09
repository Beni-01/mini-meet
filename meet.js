const video = document.getElementById("videos");

const startCam = () => {
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: true,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

window.addEventListener("load", startCam, false);
