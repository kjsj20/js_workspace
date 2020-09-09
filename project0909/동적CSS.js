// 문서내의 pic 이라는 요소의 css의 너비를 늘린다.

let w = 200;
let h = 200;
let sX = 1;
let sY = 1;
let sO = 1;
let sR = 0;
let sB = 0;

function setWidth() {
    w = w + 10;

    document.getElementById("pic").style.width = w + "px";
}

function setHeight() {
    h = h + 10;

    document.getElementById("pic").style.height = h + "px";
}

function setScaleX() {
    sX = sX + 0.5;

    document.getElementById("pic").style.transform = "scaleX(" + sX + ")";
}

function setScaleY() {
    sY = sY + 1;

    document.getElementById("pic").style.transform = "scaleY(" + sY + ")";
}

function setOpacity() {
    sO = sO - 0.1;

    document.getElementById("pic").style.opacity = sO;
}

function setRotate() {
    sR = sR + 90;

    document.getElementById("pic").style.transform = "rotate(" + sR + "deg)";
}

function setBorder() {
    sB = sB + 0.1;

    document.getElementById("pic").style.border = sB + "px dotted red";
}