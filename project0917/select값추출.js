function setColor(){
    //문서내에 select 박스에 현재 선택된 값을 추출해보자!!
    var sel = document.getElementById("sel");

    //문서내의 content 영역에 추출한 값을 이용하여 배경색상을 부여하자!!
    var content = document.getElementById("content");
    content.style.backgroundColor = sel.value;
}

function setColor2(c){
    document.getElementById("content").style.backgroundColor = c;
}