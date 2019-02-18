(function (doc) {

    var canvas = doc.getElementById("testCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    //var newPath = false;
    // click event handler
    canvas.onclick = function (e) {
        //context.clearRect(0, 0, canvas.width, canvas.height);

        // start a new path
        //newPath = true;
        // mouse x and y relative to canvas
        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetTop;

        var nextColor = randomColor();
        context.fillStyle = nextColor;
        context.beginPath();
        context.arc(x, y, 30, 0, 2 * Math.PI, true);
        context.fill();
        context.closePath();
    }

})(document);