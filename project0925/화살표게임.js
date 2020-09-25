var body;
var lt = 0;
var tp = 100;
var amount = 5;
var divarr = new Array();

var arrow = {
    value: "→",
    color: ["red", "blud", "orange", "black", "yellow"],
    moveDistance: 100,
    speed: ['0.025', '0.05', '0.25', '0.15', '0.1'],
    leftInterval: [-20, 20, 30, -60, -80]
}

function move() {
    for(i=0; i<divarr.length; i++){
        divarr[i].style.left = `${parseInt(divarr[i].style.left) + arrow.speed[i] * (parseInt(body.style.width) - parseInt(divarr[i].style.left))}px`
    }
}

function init() {
    body = document.body;
    body.style.width = `${1000}px`;
    for (i = 0; i < amount; i++) {
        var div = document.createElement("div");
        div.style.width = `${5}px`;
        div.style.height = `${5}px`;
        div.style.color = arrow.color[i];
        div.style.position = "absolute";
        div.style.left = `${lt + arrow.leftInterval[i]}px`;
        div.style.top = `${(i * 100) + tp}px`;
        div.innerText = arrow.value;
        body.appendChild(div);

        divarr.push(div);
    }
}
window.addEventListener("load", function () {
    init();
    setInterval("move()", 50);
});