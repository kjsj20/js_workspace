let mask;
let box;
let boxX = 0;
let boxY = 0;
let a = 0;
let b = 0.2;

window.addEventListener("load", function () {
    init();

    document.body.addEventListener("keydown", function () {
        move();
    })

})
function init() {
    mask = document.querySelector("#mask");
    mask.style.left = `${200}px`
    mask.style.top = `${200}px`
    box = document.querySelector("#box");
    box.style.width = `${200}px`;
    box.style.height = `${200}px`;

    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            a++;
            img = document.createElement("img");
            img.style.width = `${200}px`;
            img.style.height = `${200}px`;
            img.style.left = `${(j - 1) * 200}px`;
            img.style.top = `${(i - 1) * 200}px`
            img.style.position = "absolute";
            img.src = `../images/view/${a}.jpg`
            box.appendChild(img);
        }
    }
    setInterval("setXY()", 30);
}

function setXY() {
    mask.style.left = `${parseFloat(mask.style.left) + b * (boxX - parseFloat(mask.style.left))}px`
}

function move() {
    var key = event.keyCode;
    if (key === 37) {
        // 왼쪽
        boxX = boxX + 200
        console.log(boxX)
    } else if (key === 38) {
        // 위쪽
        boxY = `${parseFloat(boxY) + 200}`;
        mask.style.top = `${boxY}px`;
    } else if (key === 39) {
        // 오른쪽
        boxX = boxX - 200;
    } else if (key === 40) {
        // 아래쪽
        boxY = `${parseFloat(boxY) - 200}`;
        mask.style.top = `${boxY}px`;
    }
}