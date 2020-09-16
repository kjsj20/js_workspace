
function init(){
    document.write("<table  border = \"2px\"  >");
    for(i = 100; i >= 1; i--){
        document.write("<tr>");
        for(j = 1; j <= 5; j++)
        document.write("<td>"+ i +"0" + j + "호</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
