
let tab1;
let tab2;
let tab3;
let cont;

window.addEventListener("load", function () {
    init();
});

function init() {
    tab1 = document.querySelector("#tab1");
    tab1.style.background = "skyblue";
    tab2 = document.querySelector("#tab2");
    tab2.style.background = "orange";
    tab3 = document.querySelector("#tab3");
    tab3.style.background = "burlywood";
    cont = document.querySelector("#content");
    cont.style.background = "yellow";

    tab1.addEventListener("click", function () {
        cont.style.background = tab1.style.background;
    });

    tab2.addEventListener("click", function () {
        cont.style.background = tab2.style.background;
    });

    tab3.addEventListener("click", function () {
        cont.style.background = tab3.style.background;
    });
}




