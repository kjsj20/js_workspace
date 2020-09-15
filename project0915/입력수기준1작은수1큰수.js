

function init(){
    var n = parseInt(prompt("원하는수를 입력해봐요."));
    for(i = n - 1; i <= n + 1; i++){
        document.write(i + "<br/>");
    }
}

init();