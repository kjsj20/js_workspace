let LR = 100;
let UD = 50;
let bgX = 0; //배경의 x축 위치를 결정짓는 변수

function moveLeft() {
    LR = LR - 10;
    document.getElementById("pic").style.left = LR + "px";
}

function moveRight() {
    //문서내에 pic이라는 요소의 css중 position의 x축 즉 left 값을 증가 시켜준다.
    LR = LR + 10;

    document.getElementById("pic").style.left = LR + "px";
}

function moveUp() {
    UD = UD - 10;

    document.getElementById("pic").style.top = UD + "px";
}

function moveDown() {
    UD = UD + 10

    document.getElementById("pic").style.top = UD + "px";
}

function moveBg(){
    //body에 적용된 배경 css의 position 값을 x축의 음수값으로 감소시키자
    // body는 어짜피 문서내에 1개밖에 없는 유일한 요소이므로, 굳이
    // id 까지 부여할 필요가 없을것 같다.
    bgX = bgX -10

    document.body.style.backgroundPosition = bgX + "px 0px";
}

//사람이 아닌, 프로그램 언어에서 moveBg()를 일정시간 동안
//계속 호출해 준다면, 이것을 자동이라고 할 수 있다.
function auto(){
    //형식 setInterval("호출하고픈 함수명()", 호출간격(1/1000초까지 표현))
    setInterval("moveBg()",10)
}