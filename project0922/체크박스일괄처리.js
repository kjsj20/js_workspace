function checkAll(){
    var ch = document.getElementsByName("ch");
    var king = document.getElementById("king");
    for(i=0;i<ch.length;i++){
        ch[i].checked = king.checked;
    }
}