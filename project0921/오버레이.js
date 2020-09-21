let layer;
let targetO = 1;
let a = 0.1;

window.addEventListener("load", function(){
    init();
    setInterval("setOpacity()", 50);
});

function init(){
    layer = document.getElementById("layer");
    layer.style.opacity = 1;
    
    layer.addEventListener("mouseover",function(){
        targetO = 0;
    });

    layer.addEventListener("mouseout", function(){
        targetO = 1;
    });
}

function setOpacity(){
    console.log(layer.style.opacity);
    layer.style.opacity = parseFloat(layer.style.opacity) + a * (targetO - parseFloat(layer.style.opacity));
}