var showError = function(){
  var error = document.querySelector("#error");
  error.classList.remove("hide");
};

var hideError = function(){
  var error = document.querySelector("#error");
  error.classList.add("hide");
};

var positionAcquired = function(position){
  hideError();
  var latitude = document.querySelector("#latitude");
  var longitude = document.querySelector("#longitude");

  latitude.textContent = position.coords.latitude;
  longitude.textContent = position.coords.longitude;
};

var positionNotAcquired = function(){
  showError();
};

var acquirePosition = function(){
  console.log("start position aquisition");
  navigator.geolocation.getCurrentPosition(positionAcquired, positionNotAcquired);
};

var boot = function(){
  var button = document.querySelector("button");
  button.addEventListener("click", acquirePosition);
};

window.addEventListener("load", boot);
