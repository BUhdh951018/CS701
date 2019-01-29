var sliderModule = (function(win, doc) {

    win.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;


    function init() {
        
            canvas = doc.getElementById("testCanvas");
            context = canvas.getContext("2d");

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            
            // draw the initial pattern
            drawPattern();
    }


    // called whenever the slider value changes
    function drawPattern() {
        // clear the drawing area
        context.clearRect(0, 0, canvas.width, canvas.height);

        // get the current radius
        var radius = doc.getElementById("radius").value;

        // set fill color to red
        context.fillStyle = '#FF0000';

        // draw the pattern
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }

    return {
        drawPattern: drawPattern
    };

})(window, document);






