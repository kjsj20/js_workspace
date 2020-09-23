var wrapper;
var bar;

function createBar() {
    bar = document.createElement("div");
    bar.style.position = "absolute";
    bar.style.left = `${0}px`;
    bar.style.top = `${0}px`;
    bar.style.width = `${50}px`;
    bar.style.height = `${50}px`;
    bar.style.background = "red";
    wrapper.appendChild(bar);
}

function init() {
    wrapper = document.getElementById("wrapper");
    createBar();
}

window.addEventListener("load", function () {
    init();
});
