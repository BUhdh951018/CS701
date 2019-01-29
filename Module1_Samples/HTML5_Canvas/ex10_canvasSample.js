window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
   
     // create a radial gradient
     
     var gradient = 
        context.createRadialGradient(100, 100, 100, 100, 100, 0);
     gradient.addColorStop(0,   "#FF0000");
     gradient.addColorStop(0.33, "#00FF00");
     gradient.addColorStop(0.66, "#FF69B4");
     gradient.addColorStop(1,   "#0000FF");
      
     context.fillStyle = gradient;
   
     // fill a circle
     context.beginPath();
     context.arc(100, 100, 100, 0, 2 * Math.PI);
     context.fill();
     context.closePath();
     
     
     gradient = 
        context.createRadialGradient(300, 100, 100, 350, 175, 0);
     gradient.addColorStop(0,   "#FF0000");
     gradient.addColorStop(0.33, "#00FF00");
     gradient.addColorStop(0.66, "#FF69B4");
     gradient.addColorStop(1,   "#0000FF");
      
     context.fillStyle = gradient;
   
     // fill a circle
     context.beginPath();
     context.arc(300, 100, 100, 0, 2 * Math.PI);
     context.fill();
     context.closePath();
}





