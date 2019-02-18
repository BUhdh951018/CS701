(function(doc) {

    var canvas = doc.getElementById("testCanvas");
    var context = canvas.getContext("2d");

    var centerX = [];
    var centerY = [];

    canvas.onclick = function(e) {
        var x = e.clientX;
        var y = e.clientY;

        // compare with the exist circles
        for (var i=0; i<centerX.length;++i){
            var x1 = centerX[i];
            var y1 = centerY[i];

            if(Math.pow(x-x1, 2) + Math.pow(y-y1, 2) < Math.pow(30 * 2, 2)){
                context.globalCompositeOperation = 'destination-out';
                context.beginPath();
                context.arc(x1, y1, 30 + 0.5, 0, 2 * Math.PI, true);
                context.fill();
                context.closePath();
                // put the center into the array
                centerX.splice(i, 1);
                centerY.splice(i, 1);
                --i;
            }
        }

        centerX.push(x);
        centerY.push(y);

        var nextColor = randomColor();
        context.globalCompositeOperation = 'source-over';
        context.fillStyle = nextColor;
        context.beginPath();
        context.arc(x, y, 30, 0, 2 * Math.PI, true);
        context.fill();
        context.closePath();
    };

})(document);