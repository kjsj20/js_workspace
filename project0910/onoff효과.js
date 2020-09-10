
//버튼을 누를때마다, 현재 배경색상의 반대색상으로 처리하자,
//불켜고 , 끄는 효과를 낼 수 있다.

var bg;
var flag = true;

function turn(){
    bg = (flag) ? "#000000":"#ffffff";
    document.body.style.background = bg;
    flag = !flag;
}