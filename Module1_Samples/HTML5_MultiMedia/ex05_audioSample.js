window.onload = init;

function init() {
    // add event handlers for the buttons
     var song = document.getElementById("myAudio");
     var toggleButton = document.getElementById("toggleButton");
     var status = document.getElementById("status");
     
     toggleButton.onclick = function (e) {
         if (song.paused) {
             song.play();
             toggleButton.innerHTML = "Pause";
             status.innerHTML = "Playing " + song.currentSrc;
         } else {
             song.pause();
             toggleButton.innerHTML = "Play";
             status.innerHTML = "Paused " + song.currentSrc;
         }
     }    
}





