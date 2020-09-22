
var lunch = new Array();
var n;
var txt;
var btn;
lunch[0] = "짜장면"
lunch[1] = "두부전골"
lunch[2] = "햄버거"
lunch[3] = "돈까스"
lunch[4] = "떡라면"
lunch[5] = "랍스타"

window.addEventListener("load", function(){
    init();
});

function init(){
    // console.log(n);
    btn = document.querySelector("button");
    txt = document.querySelector("#txt");
    btn.addEventListener("click", function(){
        getRandom();
        txt.innerHTML= lunch[n];
    });
}

function getRandom(){
    n = parseInt(Math.random() * lunch.length);
}
