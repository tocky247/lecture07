var THREASHOLD = 50;
var CLASSNAME = "night";

var elm = document.querySelector("body");

var update = function(event){
  console.log(event.value);
  if(event != null && event.value != null && event.value < THREASHOLD){
    elm.classList.add(CLASSNAME);
  }else{
    elm.classList.remove(CLASSNAME);
  }
};

window.addEventListener("devicelight", update);
