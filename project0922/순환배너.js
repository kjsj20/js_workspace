var wrap;
var divArray = new Array(5); //반복문으로 채워넣기 위해

window.addEventListener("load", function () {
    init();
});

function init() {
    wrap = document.querySelector("#wrap");

    for (i = 1; i <= 5; i++) {
        var div = document.createElement("div");
        divArray[i]=div;
        // div.src = "../images/travel/" + i + ".jpg"
        div.style.width = 100 + "px";
        div.style.height = 75 + "px";
        div.style.position = "absolute";
        div.style.left = ((i - 1) * 100) + "px";
        div.style.border = "1px solid red";
        div.style.boxSizing = "border-box";
        wrap.appendChild(divArray[i]);
    }
}

//이미지들의 좌표를 좌측방향으로 (x음수) 이동하다가
function move() {
    for(var i =0; i<divArray.length;i++){
        divArray[i].style.left = parseInt(divArray[i].style.left) - 10 + "px";
    }
}