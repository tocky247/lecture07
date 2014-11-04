var stream;
var video;

var aquireStream = function(){
  if(!navigator.getUserMedia){
    console.log("navigator.getUserMedia is unavailable.");
  }
  navigator.getUserMedia({
    video: true,
    audio: false
  }, streamAquired, streamNotAquired);
};

var initGetUserMedia = function(){
  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
};  

var closeStream = function(){
  if(stream != null){
    stream.stop();
    video.pause();
  }
};

var streamAquired = function(aquired){
  stream = aquired;
  if(video != null){
    video.src = window.URL.createObjectURL(stream);
    window.addEventListener("unload", closeStream);
    video.play();
  }
};

var streamNotAquired = function(){
  console.log("Stream aquisition is failed");
};

var boot = function(event){
  video = document.querySelector("video");
  initGetUserMedia();

  var startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", aquireStream);

  var stopButton = document.querySelector("#stop-button");
  stopButton.addEventListener("click", closeStream);
};

window.addEventListener("load", boot);
window.addEventListener("unload", closeStream);
