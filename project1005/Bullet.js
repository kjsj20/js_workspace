// 총알을 정의한다
class Bullet{
    // 총알이 태어날때 부여할 속성들을 생성자에서 처리한다..
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        this.img.src = this.src;  //폭탄, 총알, 등등의 웨폰이 여러가지가 있으므로 변수로...
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        wrapper.appendChild(this.img);
    }

    tick(){
        // 총알의 물리량 변화
        this.y += this.velY;

        // 총알이 한걸음 , 한걸음 진행할때마다 배열에 존재하는 모든 적군을 대상으로
        // 충돌했는지 여부를 판단할꺼임.
        for(i = 0; i < enemyArray.length; i++){
            var result = collisionCheck(this.img, enemyArray[i].img);
            if(result){
                var img = enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(i,1);

                // img = bulletArray[0].img;
                wrapper.removeChild(this.img);
                var index = BulletArray.indexOf(this);
                BulletArray.splice(index,1);
            }
        }
    }

    render(){
        this.img.style.top = this.y + "px";
    }
}