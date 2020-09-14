var w = 0;
var h = 0;

function getPos(){
    //마우스의 좌표 얻기!!
    //사용자가 브라우저상에서 일으키는 행동, 사건을 이벤트라 하고
    //모든 이벤트는 자바스크립트의 event 객체가 보유하고 있다.
    var x = event.clientX;
    var y = event.clientY;

    // console.log(x,",",y);

    //추출된 정보를 이용하여, hero의 left, top과 일치시키자!!
    var hero = document.getElementById("hero"); 
    hero.style.left  = `${(x - (w/2))}px`;
    hero.style.top = `${(y - (h/2))}px`;
}

//함수를 정의하여, css에서 히어로의 너비,높이를 부여하자,
//즉 프로그래밍적으로 부여하자!!
function init(){
    //프로그램이 가동되는 시점에, 이미지의 너비와 높이 부여하기 
    w = document.querySelector("#hero").width;
    h = document.querySelector("#hero").height;
}