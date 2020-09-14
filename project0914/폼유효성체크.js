function init() {
    CKEDITOR.replace('content'); //기존의 textarea를, 편집기 디자인으로
}

function regist() {
    // 폼태그는 사용자가 입력한 데이터를 서버에 전송하는 목적의 태그이므로 폼태그의 속성을 이용하면, 전송할 서버의 주소, 전송방법 등을 지정 할
    // 수 있다. 아래의 이 전송이라는 행위는 아무나 하게 해줘야할까?? 아니다!!!, 제대로 입력양식을 작성한 사람에게만 기회를 줘야 한다.
    // 아이디를 입력했는지 여부 체크해보자,, 만일 안했다면? 절대로 아래의 전송 기능에 도달하면 안됨..
    var user = document.querySelector("#user");
    var pass = document.querySelector("#password");
    var as = document.querySelector("#as")
    var content = document.querySelector("#content");
    //텍스트박스에는 value 라는 속성을 이용하여 현재텍스트 박스에 이볅되어 있는 문자열을 얻어올 수 있다.
    if (user.value === "") {
        alert("ID를 입력 해주세요...");
        user.focus();
    } else if (pass.value === "") {
        alert("비밀번호를 입력하세요");
        pass.focus();
    } else if (as.value === "") {
        alert("유형을 선택해주세요.")
        as.focus();
    } else if (content.value === "") {
        alert("내용을 입력해주세요.")
        content.focus();
    } else {
        form1.action = "http://naver.com"; //전송할 서버의 URL
        form1.submit(); //여기서 전송행위가 일어나는 시점!!
    }
}