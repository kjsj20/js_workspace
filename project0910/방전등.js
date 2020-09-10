
var opa = 1;
var status;
var flag = true;

function turn(){
    status = (flag) ? "on" : "off";
    opa = (flag) ? 0 : 0.8;
    document.getElementById("pic").src="../images/light/switch_"+status+".png";
    document.getElementById("mask").style.opacity = opa;
    flag = !flag;
}