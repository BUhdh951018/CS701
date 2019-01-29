window.onload = init;

function init() {
    // access the canvas element and its context
    var canvas = document.getElementById("testCanvas");
    var context = canvas.getContext("2d");

    context.strokeStyle = "#FF00FF";
  
    // mewPath is true when current path is being drawn
    var newPath = false;

    // mouse down event handler
    canvas.onmousedown = function(e) {
        // start a new path
        newPath = true;
        // mouse x and y relative to canvas
        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetTop;
        // begin the path
        context.beginPath();
        context.moveTo(x, y);
    }

    // mouse move event handler
    canvas.onmousemove = function(e) {

        // mouse x and y relative to canvas
        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetTop;
        
        // draw the line 
        if (newPath) {
            context.lineTo(x, y);
            context.stroke();
        }
    }

    // mouse up event handler
    canvas.onmouseup = function(e) {

        // mouse x and y relative to canvas
        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetTop;

        // close the current path
        context.closePath();

        // make the new path variable false
        newPath = false;
    }
}










