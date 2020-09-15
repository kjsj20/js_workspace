function create(){
    //지금까지는 문서내의 요소에 접근하기 위해 아이디를 부여하고 접근 하였으나.
    //자바스크립트에서는 selector를 이용한 접근방법도 지원한다.
    var box = document.querySelector("div");
    var n = document.querySelector("input[type = 'text']").value;
    n = parseInt(n); // 문자열을 정수화 시키자
    //이미지 태그요소를 동적으로 만들어서 box 에 추가하자
    for(i = 1; i <= n; i++){
        var img = document.createElement("img");
        img.src = "../images/ball/ball1.png"
        img.style.width = `${50}px`
        box.appendChild(img);
    }
}