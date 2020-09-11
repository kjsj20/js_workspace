


function getPoint(){
    //마우스의 실시간 좌표를 텍스트 박스에 출력해보자

    //발생하는 이벤트에 대한 모든~~~정보는 event 라는 객체에 보유하고있다.
    //아까 예제에서는 키보드 이벤트에 대한 아스키코드값을 가져왔었다
    //이번엔, 키보드가 아니라 마우스에 관한 이벤트일뿐이다.

    // console.log("x축:",event.clientX);
    // console.log("y축:",event.clientY);

    //parseInt(document.getElementById("pic").currentStyle.width); IE/OPERA에선 되는데 크롬 파이어폭스 등에서는 안됨

    var p = parseInt(window.getComputedStyle(document.getElementById("pic"),null).width) / 2; 
    var z = parseInt(window.getComputedStyle(document.getElementById("pic"),null).height) / 2;
    

    document.getElementById("tx").value = p //event.clientX;
    document.getElementById("ty").value = z //event.clientY;

    document.getElementById("pic").style.left 
    = event.clientX - p + "px";
    document.getElementById("pic").style.top 
    = event.clientY - z + "px";
    
}