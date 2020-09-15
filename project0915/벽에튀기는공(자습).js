
var div1;
var img;
var x = 50;
var y = 80;
var stepX = 5;
var stepY = 4;
var pFlag = true;

function init(){
    var body = document.querySelector("body");
        div1 = document.createElement("div");
        img = document.createElement("img");
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var pause = document.createElement("button");

    body.appendChild(div1);
    div1.appendChild(img);
    body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(pause);
    div1.id = "wrap";
    div1.style.width = `${500}px`;
    div1.style.height = `${500}px`;
    div1.style.background = "yellow";
    div1.style.margin = "auto";
    div1.style.position = "relative";
    div1.style.overflow = "hidden";
    img.src = "../images/ball/ball2.png";
    img.style.width = `${70}px`;
    img.style.height = `${70}px`;
    img.style.position ="relative";
    img.style.left = `${50}px`;
    img.style.top = `${80}px`;
    btn1.innerText = "수동";
    btn1.style.position = "relative";
    btn1.addEventListener("click", function(){
        move();
    });
    btn2.innerText = "자동";
    btn2.style.position = "relative";
    btn2.addEventListener("click", function(){
        auto();
        btn2.disabled = true;
    })
    pause.innerText = "Pause";
    pause.style.position = "relative";
    pause.addEventListener("click", function(){
        pFlag = !pFlag;
    })
}

function move(){
    if(pFlag){
        x += stepX;
        y += stepY;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    }

    stepX = (x >= (parseInt(wrap.style.width) - parseInt(img.style.width)) || x <= 0) ? -stepX:stepX;
    stepY = (y >= (parseInt(wrap.style.height) - parseInt(img.style.height)) || y <= 0 ) ? -stepY:stepY;
}

function auto(){
    setInterval("move()", 5);
}
