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

let homeColor = document.querySelector("#home")
let orange = document.querySelector("#color1")
let pink = document.querySelector("#color2")
let lightblue = document.querySelector("#color3")
let blue = document.querySelector("#color4")
let purple = document.querySelector("#color5")

homeColor.addEventListener("click", function(){
  document.body.style.background = "beige";
})
orange.addEventListener("click", function(){
  document.body.style.background = "rgb(244, 176, 131)";
})
pink.addEventListener("click", function(){
  document.body.style.background = "rgb(243, 162, 210)";
})
lightblue.addEventListener("click", function(){
  document.body.style.background = "rgb(135, 231, 242)";
})
blue.addEventListener("click", function(){
  document.body.style.background = "rgb(92, 110, 242)";
})
purple.addEventListener("click", function(){
  document.body.style.background = "rgb(217, 130, 246)";
})

window.addEventListener('keydown', function(e){
  switch (e.keyCode) {
      case 48:
        keyPressBackgroundColor('beige');
        break
      case 49:
        keyPressBackgroundColor('rgb(244, 176, 131)');
        break;
      case 50:
        keyPressBackgroundColor('rgb(243, 162, 210)');
        break;
      case 51:
        keyPressBackgroundColor('rgb(135, 231, 242)');
        break;
      case 52:
        keyPressBackgroundColor('rgb(92, 110, 242)');
        break;
      case 53:
        keyPressBackgroundColor('rgb(217, 130, 246)');
  }
});
      
function keyPressBackgroundColor(color) {
    document.querySelector('body').style.background = color;
}


let chosenColor = document.querySelectorAll('input[type=radio][name="chosenColor"]:checked').value;


document.getElementById('colorStatus').innerHTML = chosenColor; 
 
  
