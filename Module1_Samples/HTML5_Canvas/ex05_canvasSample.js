window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
     
     // draw a line path
    context.strokeStyle = "#A52A2A";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(150,100);
    context.lineTo(100,50);
    context.lineTo(50, 100);
    context.stroke();
    context.closePath();
          
      // fill a line path
    context.fillStyle = "#0000FF";
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(300,100);
    context.lineTo(250,50);
    context.lineTo(200, 100);
    context.fill();
    context.closePath();
 
    // rounded joins
    context.strokeStyle = "#A52A2A";
    context.lineWidth = 10;
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(50, 175);
    context.lineTo(150,175);
    context.lineTo(100,125);
    context.lineTo(50, 175);
    context.lineTo(150,175);
    context.stroke();
    context.closePath();
    
             
}





