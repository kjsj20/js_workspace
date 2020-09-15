function init(){
    var n = prompt("몇개마다 개행할래요?");

    for(i = 1; i <= 100; i++){
        document.write("★");
        if(i % n === 0){
            document.write("<br/>");
        }
    }
}

init();