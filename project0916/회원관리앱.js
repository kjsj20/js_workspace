
var count = 0;

function regist() {
    count++;
    //regist-area div에 등록된 사람에 대한 정보 table을 출력한다.
    var area = document.querySelector("#result-area");
    var id = document.querySelector("input[name='id']");
    var pass = document.querySelector("input[name='pass']");
    var name = document.querySelector("input[name='name']");
    /*
        document.write() 와는 틀리게, innerText는 두가지 문제가 있다.
        1)<꺽쇠>를 넣어도 태그로 인식하지 않고 그냥 문자로 간주...
        2)
    */

    /*
    매번 innerText를 작성하면 코드가 너무, 중복이 많고 코드량이 많다..
        area.innerText ="<table>";
        area.innerText =area.innerText+"</table>"
    */

    //테이블 출력전에, 사용자가 입력한 데이터를 가져와 보자
    //문서내에 id라는 이름을 가진 요소 접근
    // escape 시킨 특수문자는 일반문자화 되므로, 결국 \" 라는 두개의 특수문자가 모여서 한개의 따옴표를 표현하는거임
    var str = "<table width=\"100%\" border=\"1px\">";
    str = str + "<tr>";
    str = str + "<td>ID</td>";
    str = str + "<td>Password</td>";
    str = str + "<td>Name</td>";
    str = str + "</tr>";
    for(var i = 1; i <= count; i++){
        str = str + "<tr>"
        str = str + "<td>" + id.value + "</td>";
        str = str + "<td>" + pass.value +"</td>";
        str = str + "<td>" + name.value + "</td>";
        str = str + "</tr>"
    }
    str = str + "</table>"; //기존 str에 문자열 누적

    area.innerHTML = str; //문자열 내에 <꺽쇠>가 있다면, 태그로 해석함!
}