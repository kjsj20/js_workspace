let a = 0.2;
let ballX;
let ballY;

function init(){
    let x = document.querySelector("#x"); 
    let y = document.querySelector("#y"); 
    let ball = document.querySelector("#ball");
    ball.style.position = "absolute";
    ball.style.left = 50 + "px";
    ball.style.top = 50 + "px";
    x.value = 50;
    y.value = 50;
    setInterval("setXY()", 30);
}

function clickBtn(){
    ballX = x.value 
    ballY = y.value
}

function setXY(){
    ball.style.left = parseInt(ball.style.left) + a * (ballX - parseInt(ball.style.left)) + "px";   
    ball.style.top = parseInt(ball.style.top) + a * (ballY - parseInt(ball.style.top)) + "px";
} 