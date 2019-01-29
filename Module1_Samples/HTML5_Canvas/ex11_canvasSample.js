window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
   
     // create a repeating pattern
     
    var image = new Image();
    image.src = "f4.png";
    image.onload = function() {
        var pattern = context.createPattern(image, "repeat");
        context.fillStyle = pattern;
        context.fillRect(0, 0, 400, 200);
    }    
    
}





