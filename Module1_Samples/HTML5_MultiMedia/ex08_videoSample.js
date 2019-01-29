window.onload = init;

function init() {
    // add event handlers for the buttons
     var video = document.getElementById("myVideo");
    
     var status = document.getElementById("status");
     
     // event handlers
     video.onmouseover = function (e) {
         if (video.paused) {
             video.play();
             status.innerHTML = "Playing " + video.currentSrc;
        }    
     }
     
     video.onmouseout = function (e) {
             video.pause();
             status.innerHTML = "Paused " + video.currentSrc;
     } 
}





