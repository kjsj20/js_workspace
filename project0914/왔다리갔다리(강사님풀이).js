var x = 0;
var step = 10;
var flag = true;

//함수는 호출해야 동작한다!!(호출하기 전까지는 절대로 실행하지 않는다)
function move(){
    x+= step;
    document.querySelector("#box").style.left = `${x}px`;
    document.querySelector("#box").innerText = x;
    //400이상이거나, 0이하면 기존의 5는 부호를 바꿔야 한다 
    step = (x<=0 || x>=400) ? -step: step;
}

function auto(){
    setInterval("move()", 10);
}