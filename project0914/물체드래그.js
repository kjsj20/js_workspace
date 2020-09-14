
var flag = false; //따라오게 할지 여부를 결정짓는 논리값 변수!!
            //왜 변수의 갑셍 숫자,문자,논리값 중 논리값을 이용해야 하나 ?
            //단 두가지 경우만 처리할 경우 논리값이 유리하다.. 즉 흑백논리 처리에는 논리값이 유리
            //논리값은 부정! 연산자를 이용할 경우 그 값을 뒤집을수 있으니깐!!

var hero;

function follow(){
    if(flag){
        getPos();
    } 
}

function getPos(){
    //마우스의 좌표 얻기!!
    //사용자가 브라우저상에서 일으키는 행동, 사건을 이벤트라 하고
    //모든 이벤트는 자바스크립트의 event 객체가 보유하고 있다.
    var x = event.clientX;
    var y = event.clientY;

    // console.log(x,",",y);

    //추출된 정보를 이용하여, hero의 left, top과 일치시키자!!
    // var hero = document.getElementById("hero"); 
    hero.style.left  = `${(x - (w/2))}px`;
    hero.style.top = `${(y - (h/2))}px`;
}

function setFlag(){
    flag = !flag;
    //시각적인 직관성을 부여하기 위해, 경계선으로 상태를 구분을 해보자!!
    //점선: 들고다닐 수 있다의 의미
    //점선 없을때: 못들고 다님..
    // var hero = document.querySelector("#hero");
    if(flag){
        hero.style.border = "3px dotted red";
    } else {
        hero.style.border = "0px";
    }
}

//함수를 정의하여, css에서 히어로의 너비,높이를 부여하자,
//즉 프로그래밍적으로 부여하자!!
function init(){
    //프로그램이 가동되는 시점에, 이미지의 너비와 높이 부여하기 
    hero = document.querySelector("#hero");
     w = hero.width;
     h = hero.height;
}