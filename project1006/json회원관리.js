var id,n,pass; //text 박스 
var memberArray = new Array(); //회원객체들을 모아놓을 1차원 배열..

function regist(){
    //아이디, 패스워드, 이름

    // 지금 까지는 일차원 배열에 데이터를 보관했으나, 아무래도 index를 이용하다
    // 보니 직관성이 떨어진다.. 따라서 객체지향언어에서는 데이터에 대한 보관을 보다 직관성을
    // 높이기 위해 객체를 이용한다.
    var member = {
        uid : id.value,
        uname : n.value,
        upass : pass.value
    };
    memberArray.push(member); //json을 배열에 탑재!!
    printData();
}

function printData(){
    var area = document.getElementById("result-area");
    var str = "<table width='100%' border ='1px'>";
    str +="<tr>";
    str +="<td>아이디</td>" ;
    str +="<td>비밀번호</td>";    
    str +="<td>이름</td>";    
    str +="</tr>";
    for(var i=0; i<memberArray.length; i++){
        var member = memberArray[i];
        str +="<td>"+member.uid+"</td>" ;
        str +="<td>"+member.upass+"</td>";    
        str +="<td>"+member.uname+"</td>";    
        str +="</tr>";
    }
    str +="</table>";  
    area.innerHTML = str;
}

function init(){
    id = document.getElementById("id");
    n = document.getElementById("name");
    pass = document.getElementById("pass");
}

window.addEventListener("load", function(){
    init();
});