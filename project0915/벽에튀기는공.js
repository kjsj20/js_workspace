var ball;
var wrap;
var x = 100;
var y = 50;
var stepX = 5; //x의 증가량
var stepY = 4; //y의 증가량
function init(){
    wrap = document.createElement("div");
    wrap.style.width = `${600}px`;
    wrap.style.height = `${600}px`;
    wrap.style.background = `yellow`;
    wrap.style.margin = `auto`;
    wrap.style.position = `relative`;
    wrap.style.overflow = `hidden`;
    document.body.appendChild(wrap);

    ball = document.createElement("img");
    ball.src = "../images/ball/ball2.png";
    ball.style.width = `${50}px`
    ball.style.height = `${50}px`
    ball.style.position = "absolute";
    ball.style.left = `${100}px`
    ball.style.top = `${50}px`
    wrap.appendChild(ball);

    createButton();
}

function createButton(){
    //동적으로 버튼을 생성하고, click 이벤트 마저도 프로그래밍적으로
    //처리해보자!!

    var bt1 = document.createElement("button");//수동버튼
    var bt2 = document.createElement("button");//자동버튼

    //버튼에 click 이벤트 추가하기!!
    bt1.addEventListener("click", function(){
        //이름없는 함수를 익명함수라 하고, 이 영역에 코드를 작성하면
        //해당  이벤트가 발생했을때, 이코드가 동작하게 된다..
        move();
    }); //버튼에 이벤트 감지가 등록!!
    // bt2.addEventListener("click");

    bt1.innerText = "수동";
    bt2.innerText = "자동";
    document.body.appendChild(bt1);
    document.body.appendChild(bt2);
}

//공의 좌표를 증,감 시켜 움직임 효과를 내본다.
function move(){
    //증감처리
    x += stepX;//증가할지, 감소할지 여부를 결정짓지 않기 위한 변수
    y += stepY;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    //공이 우측 벽에 도달하면... 닿은순간 x좌표 = 우측벽의 x좌표 - 공의너비 
    //공이 바닥에 도달하면... 닿은순간 y좌표 = 바닥의y좌표 - 공의너비

    if(x === (parseInt(wrap.style.width) - parseInt(ball.style.width))){
        //x축으로 감소하면서 이동..
        stepX = -stepX;
    } else if (y === (parseInt(wrap.style.height) - parseInt(ball.style.height))){
        stepY = -stepY;
    } else if (x <= 0){
        stepX = -stepX
    } else if (y <= 0){
        stepY = -stepY;
    }

}