let box; 
let a = 0.3;  
let targetX = 0;

window.addEventListener("load",function(){
    init();
    setInterval("move()", 50)
})

function init(){
    box = document.getElementById("box");
    box.style.position="relative";
    box.style.left=`${0}px`

    for(var i=1;i<=7;i++){
        let img = document.createElement("img");
        img.src = `../images/view/${i}.jpg`
        img.style.width = `${500}px`;
        img.style.height = `${400}px`;
        box.appendChild(img);
    }
}

//box div의 좌표를 설정한다!!
function setTarget(w){
    targetX =`${w}`
}

function move(){
    //박스위치 = 현재박스위치 + 비율 * 남은거리(목표지점 - 현재박스위치)
    box.style.left = parseFloat(box.style.left) + a * (targetX - parseFloat(box.style.left)) + "px";
}