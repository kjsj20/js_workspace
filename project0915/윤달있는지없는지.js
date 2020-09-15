function init(){
    var n = prompt("몇일까지 있을까요? 년도를 입력해봐요!");
    
    if(n % 4 === 0){
        document.write("29일까지");
    } else {
        document.write("28일까지");
    }
}

init();