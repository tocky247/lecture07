var update = function(event){
  var alpha = document.querySelector("#alpha");
  var beta = document.querySelector("#beta");
  var gamma = document.querySelector("#gamma");
  
  alpha.textContent = event.alpha;
  beta.textContent = event.beta;  
  gamma.textContent = event.gamma;
};

window.addEventListener("deviceorientation", update);
