var wrapper;
var bararr = new Array(7);
var a = 0.1;
var targetH = 500;

function createBar() {
    for (i = 0; i < bararr.length; i++) {
        var bar = document.createElement("div");
        bar.style.position = "absolute";
        // bar.style.left = `${0}px`;
        // bar.style.top = `${0}px`;
        bar.style.width = `${50}px`;
        bar.style.height = `${20}px`;
        bar.style.left = i * 50 + "px";
        console.log(bar.style.left);
        bar.style.borderRadius = "4px";
        switch(i){
            case 0: bar.style.background = "red"; break;
            case 1: bar.style.background = "orange"; break;
            case 2: bar.style.background = "yellow"; break;
            case 3: bar.style.background = "green"; break;
            case 4: bar.style.background = "blue"; break;
            case 5: bar.style.background = "navy"; break;
            case 6: bar.style.background = "purple"; break;
        }
        bararr[i] = bar;
        wrapper.appendChild(bar);
    }
}
//막대크기 변경 함수
function move() {
    // bar.style.height = `${parseFloat(bar.style.height) + a * (targetH - parseFloat(bar.style.height))}px`;
    for (i = 0; i< bararr.length; i++){
        bararr[i].style.height = `${parseFloat(bararr[i].style.height) + a * (parseInt(Math.random() * targetH) - parseFloat(bararr[i].style.height))}px`;
         bararr[i].innerText = parseInt(bararr[i].style.height);
    }
}

function init() {
    wrapper = document.getElementById("wrapper");
    createBar();
    setInterval("move()", 50);
}

window.addEventListener("load", function () {
    init();
});
