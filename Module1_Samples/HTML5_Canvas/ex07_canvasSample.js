window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
     
    context.strokeStyle = "#FF0000";
    context.fillStyle = "0000FF";
   
   // text font and alignment
    context.font = "24px serif";
    context.textAlign = "left";
    
    //  draw filled text
    context.fillText("Rich Internet App Development", 50, 75);
    
    // specify base line and draw outline text
    context.textBaseline = "bottom";
    context.strokeText("Rich Internet App Development", 50, 150);
    
   // draw lines under the text 
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(40, 75);
    context.lineTo(380,75);
    context.stroke();
    context.closePath();
    
    context.beginPath();
    context.moveTo(40, 150);
    context.lineTo(380,150);
    context.stroke();
    context.closePath();
    
}





