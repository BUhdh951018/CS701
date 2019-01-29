window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
     
     // draw a rectangle outline
    context.strokeStyle = "#A52A2A";
    context.lineWidth = 3;
    context.strokeRect(10, 10, 100, 100);
    
    // draw a filled rectangle
    context.fillStyle = "#00FF00";
    context.fillRect(120, 10, 100, 100);
    
    // draw a filled rectangle and clear a portion
    context.fillStyle = "#0000FF";
    context.fillRect(230, 10, 100, 100);
    context.clearRect(260, 60, 40, 45);
       
}





