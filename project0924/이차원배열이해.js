var box = new Array();

var animal = ["호랑이","사자","말"];
var flower = ["장미","튤립","백합"];
var it =["java","oracle","spring"];

box.push(animal);
box.push(flower);
box.push(it);

document.write("<table border='1px' width ='300px'>")
for(var i =0; i<box.length; i++){
    document.write("<tr>");
    for(var a=0; a < box[i].length; a++){
        document.write("<td>");
        document.write(box[i][a]);
        document.write("</td>");
    }
    document.write("<br/>");
    document.write("</tr>");
}
document.write("</table>")
window.addEventListener("load", function(){
    init();
    createDump();
});

function init(){
}
