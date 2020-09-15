
function Years(){
    var  year = document.querySelector("#year");

    for(i =2020; i >= 1930; i--){
        var opty = document.createElement("option");
        opty.text = `${i}년`;
        year.appendChild(opty);
    }
}


function Months(){
    var mon = document.querySelector("#month");

    for(i = 1; i <= 12; i++){
        var optm = document.createElement("option");
        optm.text = `${i}월`;
        mon.appendChild(optm);
    }
}

function init(){
    Years();
    Months();
}