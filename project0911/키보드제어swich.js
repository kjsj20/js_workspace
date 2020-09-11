
var x = 100;
var y = 50;
var bg = 0;
function joystick(){
    /*
        먼저 움직이는게 우선이 아니다.!!!
        일단 사용자가 누른 키보드가 무엇인지 알아야한다.
    */ 
//    console.log("당신이 누른 키보드의 1:1대응하는 아스키 코드값은", event.keyCode);

switch(event.keyCode){
    case 37 : moveLeft(); break;
    case 38 : moveUp(); break;
    case 39 : moveRight(); break;
    case 40 : moveDown(); break;
    default:document.log("지원하지않는기능");
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

function moveBg(){
    bg-= 1;
    document.getElementById("wrap").style.backgroundPosition = bg + "px, 0px";
}

function auto(){
    setInterval("moveBg()",1);
}