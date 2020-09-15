function init(){
    var str = prompt("원하는 문자를 입력해요~");
    var n = parseInt(prompt("몇번 출력할까요?"));
    
    for(i = 1; i <= n; i++){
        document.write(str);
    }
}

init();