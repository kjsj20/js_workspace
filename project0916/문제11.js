function init(){
    for(i = 1; i <= 96; i++){
        if(i % 10 === 0){
            document.write("★<br/>");
        } else {
            document.write("★");
        }
    }
}

init();