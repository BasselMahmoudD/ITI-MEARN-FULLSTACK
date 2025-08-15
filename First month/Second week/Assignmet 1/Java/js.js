var imgArr = [];
/////////////////////////////////Open connection
var http = new XMLHttpRequest();
http.open("get", "https://fakestoreapi.com/products");
http.onreadystatechange = () => {
  var data = http.responseText;
  imgArr = JSON.parse(data);
  /////////////////////////////fetch Html
  var img = document.querySelector("#img");
  var nextBtn = document.querySelector("#nextBtn");
  var prevBtn = document.querySelector("#prevBtn");
  var stopBtn = document.querySelector("#stop");
  var playBtn = document.querySelector("#play");
  var spped1 = document.querySelector("#x1");
  var spped2 = document.querySelector("#x2");
  var spped3 = document.querySelector("#x3");
  var p = document.querySelector("#title");
  img.src = imgArr[0].image;

  var currentImg = 0;
  nextTitle();
  ////////////////////////////////////////////Next button
  nextBtn.addEventListener("click", () => {
    if (currentImg < imgArr.length - 1 && currentImg >= 0) {
      currentImg++;
      img.src = imgArr[currentImg].image;
      nextTitle();
    } else {
      currentImg = 0;
      img.src = imgArr[currentImg].image;
      currentImg++;
      nextTitle();
    }
  });
  ///////////////////////////////////////////////prev button
  prevBtn.addEventListener("click", () => {
    if (currentImg < imgArr.length && currentImg != 0) {
      currentImg--;
      img.src = imgArr[currentImg].image;
      nextTitle();
    } else if (currentImg == 0) {
      currentImg = imgArr.length - 1;
      img.src = imgArr[currentImg].image;
      nextTitle();
    } else {
      currentImg = 0;
      img.src = imgArr[currentImg].image;
      currentImg++;
      nextTitle();
    }
  });

  var id;
  //////////////////////////////////////////play button
  function startSlideshow(speed) {
    if (id) clearInterval(id);
    id = setInterval(function () {
      if (currentImg < imgArr.length - 1 && currentImg >= 0) {
        currentImg++;
        img.src = imgArr[currentImg].image;
        nextTitle();
      } else {
        currentImg = 0;
        img.src = imgArr[currentImg].image;
        currentImg++;
        nextTitle();
      }
    }, speed);
  }
  playBtn.addEventListener("click", () => {
    startSlideshow(2000);
  });

  /////////////////////////////////////////Speed 1X
  spped1.addEventListener("click", () => {
    startSlideshow(1500);
  });
  /////////////////////////////////////////Speed 2X
  spped2.addEventListener("click", () => {
    startSlideshow(750);
  });
  ////////////////////////////////////////Speed 3X
  spped3.addEventListener("click", () => {
    startSlideshow(500);
  });
  ////////////////////////////////////////Stop button
  stopBtn.addEventListener("click", () => {
    clearInterval(id);
  });

  /////////////////////////////////////////add title
  function nextTitle() {
    p.innerText = imgArr[currentImg].title;
  }
};
//////////////////////////////////set Cookies
function setCookies(key, value) {
  document.cookie = `${key}=${value}`;
}
////////////////////////////////get Cookies
function getCookie() {
  var cookieKeys = document.cookie
    .split("; ")
    .map((cookie) => cookie.split("=")[1]);
  console.log(cookieKeys);
}
////////////////////////////////check Cookie
function checkCookie(value) {
  if (cookieKeys.includes(value)) {
    console.log("this value Exist");
  }
}

// setCookies("address", "cairo");
// getCookie();
// checkCookie("bassel")
//fetch Html tags

http.send();
