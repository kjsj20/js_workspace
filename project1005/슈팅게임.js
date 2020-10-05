// 게임에서는 무조건 게임루프가 존재해야, 사물을 움직일 수 있다.. 
var wrapper;
var bgY = 0;

function bgEffect(){
    // y축의 음수방향으로 배경을 움직이자
    bgY++;
    wrapper.style.backgroundPosition= "0px " + bgY + "px";
}

// 사운드 효과 
function bgSound(){
    // audio 태그 생성
    var bgAudio = document.createElement("audio"); //<audio></audio> 와 동일
    // bgAudio.src = "../images/shooting/bgm.mp3";
    // bgAudio.loop="yes";
    // bgAudio.play();
}

function gameLoop(){
    bgEffect();
}

window.addEventListener("load", function(){
    wrapper = document.getElementById("wrapper");
    bgSound();
    setInterval("gameLoop()",10);
    new Hero();
});