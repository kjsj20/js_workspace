
var mv = 0; 
var val = false; 
function move(){
    mv = (val) ? mv-=20: mv+=20;
    document.getElementById("box").style.left = mv + "px";
    document.getElementById("info").value = mv + "px";
    console.log(mv);
    val = (mv >= 0 && val === (mv === 0 ? true:false) && mv != 500) ? false:true;
}