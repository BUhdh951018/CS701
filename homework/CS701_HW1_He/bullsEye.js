var bullsEye = (function(win, doc) {

    win.onload = init;

    var canvas;
    var context;

    // center of the rect
    var centerX, centerY;

    function init() {
        canvas = doc.getElementById("bullsEye");
        context = canvas.getContext("2d");

        centerX = canvas.width / 2;
        centerY = canvas.height / 2;

        //use the function to show the cirlce
        drawPattern();
    }

    function drawPattern() {
        //clear the area
        context.clearRect(0, 0, canvas.width, canvas.height);

        //get the band
        var band = doc.getElementById("band").value;
        //show the current band
        doc.getElementById("current").innerHTML = band;
        //context.beginPath();
        var number = 400 / band / 2;
        //the first circle radius
        var radius = band * number;
        //show the circle one by one 
        var i;
        var count = 0;
        for (i = number; i > 0; i--){
            //fill the color
            if (count % 2 == 0){
                context.fillStyle = '#FF0000'
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                context.fill();
                context.closePath();
            }else{
                context.fillStyle = '#0000FF'
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                context.fill();
                context.closePath();
            }
            count++;
            
            //calculate the next circle radius
            radius = radius - band;
        }
        
    }

    return {
        drawPattern: drawPattern
    }

})(window, document);