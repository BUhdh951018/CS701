window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
     
     // draw a half arc anticlockwise
    context.strokeStyle = "#A52A2A";
    context.lineWidth = 3;
    context.beginPath();
    context.arc(75,50, 40, 0, Math.PI, true);
    context.stroke();
    context.closePath();
    
     // draw a half arc clockwise
    context.beginPath();
    context.arc(160,50, 40, 0, Math.PI, false);
    context.stroke();
    context.closePath();
    
     // fill a half arc anticlockwise
    context.fillStyle = "0000FF";
    context.beginPath();
    context.arc(245,50, 40, 0, Math.PI, true);
    context.fill();
    context.closePath();
  
    // fill a half arc clockwise
    context.beginPath();
    context.arc(330,50, 40, 0, Math.PI, false);
    context.fill();
    context.closePath();
  
    // draw a circle
    context.beginPath();
    context.arc(75,150, 40, 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();
    
    // fill a circle
    context.beginPath();
    context.arc(245,150, 40, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();
         
}





