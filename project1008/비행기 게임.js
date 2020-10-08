let wrapper;
let hero;
let enemy;
let bulletArray = new Array();
function gameLoop(){
    // console.log("call");
    hero.tick();
    hero.render();
    for(var i =0; i<bulletArray.length; i++){
        bulletArray[i].tick();
        bulletArray[i].render();
    }
    console.log(wrapper.style.left);
}

function createHero(){
    // container, src, width, height, x, y, velX, velY
    hero = new Hero(wrapper, "../images/shooting/plane.png",100,65,0,0,0,0);
}

function createEnemy(){
    // container, src, width, height, x, y, velX, velY
    enemy = new Enemy(wrapper, "../images/shooting/e1.png",100,65,900,200,0,0);
    enemy = new Enemy(wrapper, "../images/shooting/e2.png",100,65,900,300,0,0);
    enemy = new Enemy(wrapper, "../images/shooting/e3.png",100,65,900,400,0,0);
    enemy = new Enemy(wrapper, "../images/shooting/e4.png",100,65,900,500,0,0);
}

function createBullet(){
    let bullet = new Bullet(wrapper, "../images/shooting/ball.png",25,25,hero.x, hero.y, 10);

    bulletArray.push(bullet);
}

// 우주선 움직이기
function moveX(x){
    hero.velX = x;
    // hero.velY = y;
}

function moveY(y){
    hero.velY = y;
}

function init(){
    wrapper = document.querySelector("#wrapper");
    // wrapper.style.left = 0;
    // 키보드 이벤트 구현하기
    document.body.addEventListener("keydown", function(e){
        //spacebar 누르면 총알 생성!!
        switch(e.keyCode){
            case 32: createBullet();break;
            case 37: moveX(-5); break;
            case 39: moveX(5); break;
            case 38: moveY(-5); break;
            case 40: moveY(5); break;
        }
    });

    document.body.addEventListener("keyup", function(e){
        //spacebar 누르면 총알 생성!!
        switch(e.keyCode){
            case 37: moveX(0); break;
            case 39: moveX(0); break;
            case 38: moveY(0); break;
            case 40: moveY(0); break;
        }
    });
}

//load 이유 : 모든 태그마다 1:1 대응되는 객체인 .DOM이 메모리에 올라올
// 때까지 기다렸다가 실행하기 위해...
window.addEventListener("load",function(){
    init();
    createHero();
    createEnemy();
    setInterval("gameLoop()",10)
});