window.onload = init;

function init() {
    
    var canvas = document.getElementById('testCanvas');
    var context = canvas.getContext('2d');
    
    // ball parameters
    var ballRadius = 10; 
    var ballSpeed = 20;
    var startPoint = {x : 50, y : 7};
    var angle = 40;
    
    // displacement of ball for each step
    var dx = 0;
    var dy = 0;
    
    // current ball position
    var ballPosition = {
        x : startPoint.x,
        y : startPoint.y
    };
    
    // previous positions of the ball
    var points = new Array();
    
    // for showing the path
    var trackImage = new Image();
    trackImage.src = "point.png";
  
    // ball displacement for the next step
    function updatePosition() {
        angle %= 360;
        var radians = angle * Math.PI / 180;
        dx = Math.cos(radians) * ballSpeed;
        dy = Math.sin(radians) * ballSpeed;
    }
    
    // draw current position on the canvas
    function drawBallOnCanvas() {
        // Initialize the Canvas area
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, canvas.width, canvas.height);
       
        // Draw Bounding Box
        context.strokeStyle = '#000000';
        context.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
        
        // Keep and Draw at most 2000 previous positions
        if (points.length == 2000)
            points.splice(0, points.length);
        for (var i= 0; i< points.length; i++) {
            context.drawImage(trackImage, points[i].x, points[i].y,1,1);
        }
        
        // Update ball position and draw the ball
        ballPosition.x += dx;
        ballPosition.y += dy;
        context.fillStyle = "#0000FF";
        context.beginPath();
        context.arc(ballPosition.x, ballPosition.y, ballRadius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
        
        // save the current position
        points.push({x : ballPosition.x, y : ballPosition.y});
        
        // determine if ball is bouncing of the edges
        if (ballPosition.x + ballRadius > canvas.width || 
                ballPosition.x - ballRadius < 0) {
            angle = 180 - angle;
            updatePosition();
        } else if (ballPosition.y + ballRadius > canvas.height || 
                ballPosition.y - ballRadius < 0) {
            angle = 360 - angle;
            updatePosition();
        }
    }
    
    // calculate the current position
    updatePosition();

    // browser specific animation request
     window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  // fall back to JavaScript setTimeout
                  function(callback, element){
                    window.setTimeout(callback, 1000 / 60);
                  };
        })();
        
    // Define the Animation
    function doAnimation() {
        // Draw a single frame of animation on our canvas
        drawBallOnCanvas();

        // After this frame is drawn, let the browser schedule the next one

        window.requestAnimFrame(doAnimation, canvas);
    }

    // Start the Animation
        
     window.requestAnimFrame(doAnimation, canvas);
}










