function init(){
    var n = prompt("숫자를 입력해보세요!");

    for(i = 1; i <= n; i++){
        for(j = 1; j <= n; j++){
            document.write("★");
        }
        document.write("<br/>")
    }
}

init();