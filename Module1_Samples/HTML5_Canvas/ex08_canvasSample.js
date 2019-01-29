window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
    
    // shadow properties
    context.shadowColor = "#D3D3D3";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = -5;
     
    context.fillStyle = "0000FF";
   
   // text font and alignment
    context.font = "24px serif";
    context.textAlign = "left";
    
    //  draw filled text
    context.fillText("Rich Internet App Development", 50, 45);
    
   // apply a blur 
    context.shadowOffsetX = -15;
    context.shadowOffsetY = 15;
    context.shadowBlur = 5;
    context.fillText("Rich Internet App Development", 50, 85);
    
    // a filled reactangle
    context.fillStyle = "#00FF00";
    context.fillRect(100, 125, 100, 20);
   
}





