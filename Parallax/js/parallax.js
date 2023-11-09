function initialize(){
  window.addEventListener("scroll", moveImagesWhenUserScrolls);
}

function moveImagesWhenUserScrolls(){
  const scrollPosition = window.scrollY;

  const MOON = document.getElementById("moon");
  const BG = document.getElementById("bg");
  const MOUNTAIN = document.getElementById("mountain");
  const ROAD = document.getElementById("road");
  const TEXT = document.getElementById("text");

  MOON.style.left = -scrollPosition + "px";
  BG.style.top = scrollPosition * 0.1 + "px";
  MOUNTAIN.style.top = -scrollPosition * 0.3 + "px";
  ROAD.style.top = scrollPosition * 0.1 + "px";
  TEXT.style.top = scrollPosition * 1.5 + "px";
}

initialize();