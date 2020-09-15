function init(){
    var n = prompt("구구단을 외자! 몇 단을 보고싶으신가요?");

    for(i = 1; i <= 9; i++){
        document.write(n + "*" + i + "=" + n * i + "<br/>");
    }

}

init();