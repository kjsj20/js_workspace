var content; //좌표 점을 찍고, 이미지도 추가
var info;   //이차원 배열에 쌓여진 데이터 현황 출력
var dotArray = new Array(); //사용자의 좌표흔적을 누적시킬 배열, 이안에 
//좌표를 표현한 일차원 배열을 누적시켜나갈 것임..
var btn;
var img;
var imgW = 100;
var imgH = 50;
var n = 0; 
var targetX = -20;
var targetY = 340;
var a = 0.1;
//마우스의 좌표를 구해서, 해당 지점에 흔적을 남기고
//이 좌표(x,y 일차원배열) 정보를 2차원 배열에 누적시켜보자
//즉 좌표 데이터베이스를 구축하자!!(이차원 배열은 데이터베이스이다!)
function setPoint() {
    var x = event.clientX;
    var y = event.clientY;

    var dot = document.createElement("div");
    dot.style.width = `${5}px`
    dot.style.height = `${5}px`
    dot.style.background = "red";
    dot.style.position = "absolute";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.innerText = `${x},${y}`;
    content.appendChild(dot);

    //좌표 1점을 담게될 일차원 배열 
    var point = [x, y];
    //dotArray에 추가
    dotArray.push(point);
    printInfo(x, y);
}
//현재 배열의 누적된 상황을 우측 정보창에 출력하자!
function printInfo(px, py) {
    // info.innerText = "[" + px +"," + py+ "]"
    var str = "";
    for (i = 0; i < dotArray.length; i++) {
        var point = dotArray[i];
        str += "[" + point[0] + "," + point[1] + "]\n";
    }
    info.innerText = str;
}

function move(){
    var point = dotArray[n];
    console.log(targetX);
    console.log((img.style.left));
    if(dotArray.length > n){
        if(targetX <= parseInt(img.style.left) + 15){
            targetX = `${point[0] - (imgW / 2)}`;
            targetY = `${point[1] - (imgH / 2)}`;
            n++;
        }
    }
        img.style.left = parseFloat(img.style.left) + a * (targetX - parseFloat(img.style.left)) + "px";
        img.style.top = parseFloat(img.style.top) + a * (targetY - parseFloat(img.style.top)) + "px";
    
}
function init() {
    content = document.getElementById("content");
    info = document.getElementById("info");
    btn = document.querySelector("button");
    img = document.querySelector("#pic");
    img.style.position = "relative";
    img.style.width = `${imgW}px`;
    img.style.height = `${imgH}px`;
    img.style.left = `${targetX}px`;
    img.style.top = `${targetY}px`;

    btn.addEventListener("click", function () {
        setInterval("move()", 10);
    });

}

window.addEventListener("load", function () {
    init();
});