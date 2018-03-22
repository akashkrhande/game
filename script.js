var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var x=canvas.width/2;
var y=canvas.height-30;
var dx=2;
var dy=-2;
var ballraduis=10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}
function draw()
{ctx.clearRect(0,0,canvas.width,canvas.height); 
    drawball();
    drawpaddle();
    if(y+dy<0||y+dy >canvas.height-ballraduis)
    {
        dy=-dy;

    }
    if(x+dx<0||x+dx >canvas.width-ballraduis)
    {
        dx=-dx;

    }
if(rightPressed && Paddlex<canvas.width-PaddleWidth)
{
    paddlex +=7;

}
else if(leftPressed && PaddleX >0)
{
    paddlex -=7;
}


    x +=dx;
    y +=dy;
}

 setInterval(draw,10);