// 게임에서는 무조건 게임루프가 존재해야, 사물을 움직일 수 있다.. 
var wrapper;
var bgY = 0;
var hero;
var enemyImg = ["e1.png","e2.png","e3.png","e4.png","e5.png"];
var enemyArray = new Array();
var BulletArray = new Array(); // 내장 객체중 Array() 객체는 배열을 제어할 수 있다.
var bombArray = new Array();

function bgEffect(){
    // y축의 음수방향으로 배경을 움직이자
    bgY++;
    wrapper.style.backgroundPosition= "0px " + bgY + "px";
}

// 사운드 효과 
function bgSound(){
    // audio 태그 생성
    var bgAudio = document.createElement("audio"); //<audio></audio> 와 동일
    bgAudio.src = "../images/shooting/bgm.mp3";
    bgAudio.loop="yes";
    bgAudio.play();
}

// 영웅 생성
function createHero(){
    // screen.width 모니터의 가로 사이즈
    //  screen.height 모니터의 세로 사이즈
    hero = new Hero((screen.width/4) - 40, 550, 80, 65, 0, 0);
}

// 적 생성
function createEnemy(){
    for(i = 0; i < enemyImg.length - 3; i++ ){
        // var en = new Enemy("../images/shooting/"+ enemyArray[i] +".png", (i+1) * 120, 20, 70, 70,0,0);
        for(j=0; j < 6; j++){
            var en = new Enemy("../images/shooting/"+enemyImg[i], (j+1) * 120, i * 80, 70, 70,0,0.1);
            enemyArray.push(en); //배열에 담기!!
        }
    }
}

// 총알 생성
function createBullet(){
    // src,x,y,width,height,velX,velY
    var bullet = new Bullet("../images/shooting/ball.png", hero.x + (hero.width / 2) - 12, hero.y, 25,25,0,-10);

    // 무기 사운드 처리
    var audio = document.createElement("audio");
    audio.src = "../images/shooting/fire.wav";
    audio.play();

    BulletArray.push(bullet);
}

// 폭탄 생성
function createBomb(){
    var bomb = new Bullet("../images/shooting/missile.png", hero.x + (hero.width / 2) - 25, hero.y, 50,80,0,-6)

    var audio = document.createElement("audio");
    audio.src = "../images/shooting/bomb.wav";
    audio.play();

    bombArray.push(bomb);
}

function gameLoop(){
    hero.render();
    hero.tick();
    // 총알을 아직 생성된 적이 없기 때문에 bullet변수에는 undefined 값이 들어있다..
    // 따라서 존재하지 않는 객체의 메서드를 호출하게 되면 에러가 발생한다.
    // if(bullet != undefined){
    //     bullet.render();
    //     bullet.tick();
    // }

    //총알을 날라가게함
    for(var i = 0; i<BulletArray.length; i++){
        BulletArray[i].tick();
        BulletArray[i].render();
    }
    //폭탄을 날라가게함
    for(var i = 0; i<bombArray.length; i++){
        bombArray[i].tick();
        bombArray[i].render();
    }
    for(var i = 0; i<enemyArray.length; i++){
        enemyArray[i].tick();
        enemyArray[i].render();
    }
    bgEffect();
}

window.addEventListener("load", function(){
    wrapper = document.getElementById("wrapper");
    // 게임화면인 div에 키보드 이벤트 구현
    document.body.addEventListener("keydown", function(e){
        var key = e.keyCode;
        switch(key){
            case 37 : hero.velX = -5 ;break; //좌
            case 39 : hero.velX = 5 ;break; //우
            case 38 : hero.velY = -5 ;break; //위
            case 40 : hero.velY = 5 ;break; //아래
            case 32 : createBullet();break; //총알 발사
            case 66 : createBomb();break; // 폭탄 발사
        }
    });

    document.body.addEventListener("keyup", function(e){
        var key = e.keyCode;
        switch(key){
            case 37 : hero.velX = 0 ;break; //좌
            case 39 : hero.velX = 0 ;break; //우
            case 38 : hero.velY = 0 ;break; //위
            case 40 : hero.velY = 0 ;break; //아래
        }
    });

    // bgSound();
    createHero();
    createEnemy();
    setInterval("gameLoop()",10);
});