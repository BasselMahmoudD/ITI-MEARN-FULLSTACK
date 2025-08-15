var svg = document.querySelector("#svg2");
var eye1 = document.querySelector("#path2996");
var eye2 = document.querySelector("#path2996-2");
var mouth1 = document.querySelector("#path3081-0");
var mouth2 = document.querySelector("#path3898");
var mouth3 = document.querySelector("#path3081-0-8");
var btnStop = document.querySelector("#btnStop");
var btnPlay = document.querySelector("#btnPlay");
var video = document.querySelector("#video");
var progress = document.querySelector("#progress");
var sound = document.querySelector("#sound");
var range = document.querySelector("#range");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");

a1.addEventListener("click", () => {
  video.src = "http://127.0.0.1:5501/img/video/ed_1024_512kb.mp4";
});
a2.addEventListener("click", () => {
  video.src = "http://127.0.0.1:5501/img/video/ed_hd.ogv";
});
a3.addEventListener("click", () => {
  video.src = "http://127.0.0.1:5501/img/video/sample.mp4";
});

function setBg(color, eye) {
  if (eye.id == "path3898") {
    console.log("hi");
    eye.style.stroke = color;
  } else {
    eye.style.fill = color;
  }
}

[eye1, eye2, mouth1, mouth2, mouth3].forEach((part) => {
  part.addEventListener("mouseover", () => setBg("red", part));
  part.addEventListener("mouseout", () => setBg("black", part));
});

btnPlay.addEventListener("click", () => {
  video.play();
});
btnStop.addEventListener("click", () => {
  video.pause();
});

video.addEventListener("timeupdate", (e) => {
  progress.setAttribute("value", e.target.currentTime);
  progress.setAttribute("max", e.target.duration);
});

sound.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }

  sound.value == "mute" ? (sound.value = "Unmute") : (sound.value = "mute");
});

range.addEventListener("input", (e) => {
  range.setAttribute("value", e.target.value);
  video.volume = e.target.value;
});

var arr = [
  "http://127.0.0.1:5501/img/video/ed_1024_512kb.mp4",
  "http://127.0.0.1:5501/img/video/ed_hd.ogv",
  "http://127.0.0.1:5501/img/video/sample.mp4",
];

function nextFilm() {
  for (var i = 0; i < arr.length - 1; i++) {
    if (video.src == arr[0]) {
      video.src = arr[1];
      break;
    } else if (video.src == arr[1]) {
      video.src = arr[2];
      break;
    } else {
      video.src = arr[3];
      break;
    }
  }
}

video.addEventListener("ended", () => {
  nextFilm();
});

navigator.geolocation.getCurrentPosition(
  function (p) {
    console.log(p.coords.latitude, p.coords.longitude);
    location.replace(
      "https://www.google.com/maps/@" +
        p.coords.latitude +
        "," +
        p.coords.longitude
    );
  },
  function (e) {
    console.log(e);
  }
);
