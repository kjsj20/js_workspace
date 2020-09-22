var wrap;
var arr = new Array(5); //반복문으로 채워넣기 위해
var targetX = 0;
var a = 0.2;

window.addEventListener("load", function () {
    init();
    setInterval("setXY()", 20);
});

function init() {
    wrap = document.querySelector("#wrap");

    for (i = 0; i < arr.length; i++) {
        var img = document.createElement("img");
        arr[i] = img;
        img.src = "../images/travel/" + (i + 1) + ".jpg"
        console.log(img.src);
        img.style.width = 100 + "px";
        img.style.height = 75 + "px";
        img.style.position = "absolute";
        img.style.left = (i * 100) + "px";
        // img.style.border = "1px solid red";
        img.style.boxSizing = "border-box";
        wrap.appendChild(img);
    }
    
}

//이미지들의 좌표를 좌측방향으로 (x음수) 이동하다가
// function move() {
//     for (var i = 0; i < arr.length; i++) {
//         // console.log(divArray.length);
//         targetX = parseFloat(arr[i].style.left) - 100 + "px";
//     }
// }

function setXY(){
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.left = parseFloat(arr[i].style.left) + a * ((parseFloat(arr[i].style.left) - 10) - parseFloat(arr[i].style.left)) + "px";
        if(parseFloat(arr[i].style.left) === -100) {
            arr[i].style.left = 400 + "px";
        }
    }
}