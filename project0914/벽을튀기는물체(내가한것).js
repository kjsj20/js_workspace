
//문서가 로드되면, 초기화할 작업을 아래의 init함수에서 처리해보자!
var box;
var x =0;
var y = 100;
var flag = "오아";
function init(){
    //박스의 스타일을 css에서가 아니라, js 프로그래밍으로 처리한다!!
    //효과적으로는 달라질게 없으나, css를 프로그램으로 제어 할 수있다.
    box = document.querySelector("#box");//전역변수에 보관!!
    box.style.width = `${50}px`
    box.style.height = `${50}px`
    box.style.background = "red";
    box.style.position = "absolute";
    box.style.left = `${0}px`
    box.style.top = `${100}px`
    
}

function move(){
    // console.log(wrap.style.width);
    console.log(y);
    // console.log(flag);
    if(y >= 450){
        flag = "오위";
    }  else if(x >= 450){
        flag = "왼위";
    } else if (y <= 0){
        flag = "왼아";
    } else if (x <= 0) {
        flag = "오아";
    }

    console.log(flag);
    if(flag === "오아"){
        x+=10;
        y+=10;
    } else if(flag === "오위") {
        x+=10;
        y-=10;
    } else if(flag === "왼위"){
        x-=10;
        y-=10;
    } else if(flag === "왼아"){
        x-=10;
        y+=10;
    }
        
    box.style.left = `${x}px`;
    box.style.top = `${y}px`
}

function auto(){
    setInterval("move()", 10);
}