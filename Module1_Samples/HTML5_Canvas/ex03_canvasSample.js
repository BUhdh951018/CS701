window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
     
     // draw text
     context.font = "32px san-serif";
     context.fillStyle = "FF0000";
     context.fillText("Welcome to CS701!", 50, 150);
 
    // draw an image
    var image = new Image();
    image.src = "f4.png";
    image.onload = function() {
        context.drawImage(image, 150, 20);
    }    
}





