function init() {
    var w = parseInt(prompt("테이블의 width 입력"));
    var b = parseInt(prompt("테이블의 border 입력"));
    var tr = parseInt(prompt("테이블의 층수 입력"));
    var td = parseInt(prompt("테이블의 호수 입력"));

    document.write("<table border = \""+b+"px\" width = \"" + w + "px\">");

    for(i = 1; i <= tr; i++){
        document.write("<tr>");
        for(j = 1; j <= td; j++){
            document.write("<td>"+ i + "0" + j + "호" +"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

init();