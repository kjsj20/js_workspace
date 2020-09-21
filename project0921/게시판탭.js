
let tab1;
let tab2;
let tab3;
let cont;

window.addEventListener("onload", function(){
    init();
});

function init(){
    tab1 = document.getElementById("#tab1");
    tab2 = document.querySelector("#tab2");
    tab3 = document.querySelector("#tab3");
    cont = document.querySelector("#content");
}

tab1.addEventListener("click",function(){
    console.log(cont.style.background);
})


