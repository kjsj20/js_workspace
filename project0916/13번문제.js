function init(){
    for(i = 1; i <= 9; i++){
        for(j = 2; j <= 9; j++){
            document.write(j + "x" + i + "=" + j * i + "\t" );
        }
        document.write("</br>")
    }
}

init();