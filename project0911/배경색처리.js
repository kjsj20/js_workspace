var bg=prompt("원하시는 번호를 선택하세요\n 1.빨간색 2.주황색 3.노란색 4.초록색 5.파란색 6.남색 7.보라색 ");

document.write("당신이 입력한 배경색은" + bg);

//body에 배경색을 적용하자.

if(bg==="1"){
    document.body.style.background = "red";
}
else if(bg==="2"){
    document.body.style.background = "orange";
}
else if(bg==="3"){
    document.body.style.background = "yellow";
}
else if(bg==="4"){
    document.body.style.background = "green";
}
else if(bg==="5"){
    document.body.style.background = "blue";
}
else if(bg==="6"){
    document.body.style.background = "navy";
}
else if(bg==="7"){
    document.body.style.background = "purple";
}
else{
    document.write("사용법 숙지 부탁.");
}

/*
    if문 하나 : 단일 판단
    if~else : 흑백논리 판단 , 삼항연산자와 같다
    else if : 다중 판단 , 판단대상이 여러개일 경우
 */