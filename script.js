var greenBtn = document.querySelector(".btn-green");
var blueBtn = document.querySelector(".btn-blue");
var yellowBtn = document.querySelector(".btn-yellow");
var redBtn = document.querySelector(".btn-red");
var background = document.querySelector(".background");
var currentColor = "";
var stuff = document.querySelector(".stuff");

setTimeout(function() {
  greenBtn.classList.add("animated","pulse")
}, 250)

setTimeout(function() {
  blueBtn.classList.add("animated","pulse")
}, 500)

setTimeout(function() {
  yellowBtn.classList.add("animated","pulse")
}, 750)
setTimeout(function() {
  redBtn.classList.add("animated","pulse")
}, 1000)

greenBtn.onclick = function() {
  if (checkColor("rgb(34, 153, 84)")) {}
  else {
    background.style.background = "#229954"
  }
  setCurrentColor()
}
blueBtn.onclick = function() {
  if(checkColor("rgb(41, 128, 185)")) {}
  else {
    background.style.background = "#2980B9"
  }
  setCurrentColor()
}
yellowBtn.onclick = function() {
  if(checkColor("rgb(241, 196, 15)")) {}
  else {
    background.style.background = "#F1C40F"
  }
  setCurrentColor()
}
redBtn.onclick = function() {
  if(checkColor("rgb(192, 57, 43)")){}
  else {
  background.style.background = "#C0392B"
  }
  setCurrentColor()
}

function checkColor(clickColor) {
  console.log(currentColor, clickColor)
  if (currentColor === clickColor) {
    background.style.background = "#FFF"
    return true
  }
  else {
    return false
  }
}

function setCurrentColor() {
  currentColor = background.style.background;
}
stuff.onclick = function() {
  background.style.background = "#FFF"
}
