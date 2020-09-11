
var x = 100;
var y = 50;

function joystick(){
    /*
        먼저 움직이는게 우선이 아니다.!!!
        일단 사용자가 누른 키보드가 무엇인지 알아야한다.
    */ 
//    console.log("당신이 누른 키보드의 1:1대응하는 아스키 코드값은", event.keyCode);

 if (event.keyCode === 37) {
   moveLeft();
} else if (event.keyCode === 38) {
    moveUp();
} else if (event.keyCode === 39) {
    moveRight();
} else if (event.keyCode === 40) {
    moveDown();
}

}

function moveLeft(){
    x-=10
    document.getElementById("bird").style.left = x + "px";
}
function moveUp(){
    y-=10
    document.getElementById("bird").style.top = y + "px";
}
function moveRight(){
    x+=10
    document.getElementById("bird").style.left = x + "px";
}
function moveDown(){
    y+=10
    document.getElementById("bird").style.top = y + "px";
}