const toggleMenu = document.querySelector("#toggleMenu");
const getColorToggle = document.querySelector("#nav-colors");

toggleMenu.addEventListener("mouseenter", function () {
  getColorToggle.style.transform = "translateX(0px)";
});

toggleMenu.addEventListener("mouseleave", function () {
  getColorToggle.style.transform = "translateX(-325px)";
});

getColorToggle.addEventListener("mouseover", function () {
  getColorToggle.style.transform = "translateX(0px)";
});

getColorToggle.addEventListener("mouseleave", function () {
  getColorToggle.style.transform = "translateX(-325px)";
});

getColorToggle.addEventListener("click", function () {
  getColorToggle.style.transform = "translateX(-325px)";
});

let homeColor = document.querySelector("#home");
let orange = document.querySelector("#color1");
let pink = document.querySelector("#color2");
let lightblue = document.querySelector("#color3");
let blue = document.querySelector("#color4");
let purple = document.querySelector("#color5");

homeColor.addEventListener("click", function () {
  document.body.style.background = "beige";
  document.getElementById("colorStatus").innerHTML = "You chose beige";
});

orange.addEventListener("click", function () {
  document.body.style.background = "rgb(244, 176, 131)";
  document.getElementById("colorStatus").innerHTML = "You chose orange";
});

pink.addEventListener("click", function () {
  document.body.style.background = "rgb(243, 162, 210)";
  document.getElementById("colorStatus").innerHTML = "You chose pink";
});

lightblue.addEventListener("click", function () {
  document.body.style.background = "rgb(135, 231, 242)";
  document.getElementById("colorStatus").innerHTML = "You chose lightblue";
});

blue.addEventListener("click", function () {
  document.body.style.background = "rgb(92, 110, 242)";
  document.getElementById("colorStatus").innerHTML = "You chose blue";
});

purple.addEventListener("click", function () {
  document.body.style.background = "rgb(217, 130, 246)";
  document.getElementById("colorStatus").innerHTML = "You chose purple";
});

window.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 48:
      keyPressBackgroundColor("beige");
      document.getElementById("colorStatus").innerHTML = "You chose beige";
      document.getElementById("home").checked = true;
      break;
    case 49:
      keyPressBackgroundColor("rgb(244, 176, 131)");
      document.getElementById("colorStatus").innerHTML = "You chose orange";
      document.getElementById("color1").checked = true;
      break;
    case 50:
      keyPressBackgroundColor("rgb(243, 162, 210)");
      document.getElementById("colorStatus").innerHTML = "You chose pink";
      document.getElementById("color2").checked = true;
      break;
    case 51:
      keyPressBackgroundColor("rgb(135, 231, 242)");
      document.getElementById("colorStatus").innerHTML = "You chose lightblue";
      document.getElementById("color3").checked = true;
      break;
    case 52:
      keyPressBackgroundColor("rgb(92, 110, 242)");
      document.getElementById("colorStatus").innerHTML = "You chose blue";
      document.getElementById("color4").checked = true;
      break;
    case 53:
      keyPressBackgroundColor("rgb(217, 130, 246)");
      document.getElementById("colorStatus").innerHTML = "You chose purple";
      document.getElementById("color5").checked = true;
  }
});

function keyPressBackgroundColor(color) {
  document.querySelector("body").style.background = color;
}
