function init(){
    for( i = 1; i <= 25; i ++){
        if(i % 5 === 0){
            document.write("★<br/>");
        }else {
            document.write("☆");
        }
    }
}
init();