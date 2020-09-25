/*
    게임에 움직임을 처리하기 ㅜ이해 서는 setInterval과 같은 자동함수의 사용이 필수이다.
    이때, 이 자동함수는 가급적 1개만 만들어야 동기화에 문제가 생기지 않는다.
*/
//모든 게임의 객체들을 대상으로 주기적 함수 호출을 시도할 엔진 루프
var hero;
var bullet;
var count = 0;
var wrapper;
var bgX = 0;
var enemySrc = [
    "../images/shooting/e1.png",
    "../images/shooting/e2.png",
    "../images/shooting/e3.png",
    "../images/shooting/e4.png",
    "../images/shooting/e5.png"
];
function createHero(){
    //주인공 거푸집인 Hero 클래스로부터 주인공 인스턴스 1개를 생성해본다.
    //생성된 객체를 제어하려면, 반드시 변수나 배열이 있어야 한다.
     hero = new Hero(wrapper, 150, 200, 100, 65);
}

function createEnemy(){
    //사용자마다 모니터 너비, 높이가 틀리므로 프로그래밍적으로 얻어온 결과에 대해서 
    //위치를 설정해보자

    for(i=0;i<enemySrc.length;i++){
        new Enemy(wrapper, screen.width - 150, (i+1) * 100, 70, 65, enemySrc[i]);
    }
    
    // alert(screen.width +","+ screen.height);
}

function createBullet(){
    bullet = new Bullet(wrapper, hero.x,hero.y, 30,30);
}

function moveBg(){
    bgX -= 2;
    wrapper.style.backgroundPosition = bgX + "px 0px";
}

//게임에 등장하는 모든~~ 요소를 움직여주는 심장박동!!
function gameLoop(){
    moveBg();
    bullet.move();
}

function init (){
    wrapper = document.getElementById("wrapper");
    //interval에 지정한 시간은 게임의 실행 속도를 좌우한다 (Frame Per Second) 1초마다 몇번의
    //실행을 하는지에 대한 빈도수
    setInterval("gameLoop()", 10); //게임 루프 가동 시작!!
    createHero();
    createEnemy();
    //키보드 이벤트 구현하기
    document.addEventListener("keydown", function(e){
        if(e.keyCode == 32){
            createBullet();//총알 생성 함수 호출
        }
    });
}

window.addEventListener("load", function(){
    init();
});