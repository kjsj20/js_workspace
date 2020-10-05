class Box{
    constructor(bg,x,y){
        //객체가 보유한 인스턴스 변수들..
        this.div = document.createElement("div");
        this.bg = bg; //인스턴스의 색상 결정
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        
        this.div.style.width = 100+"px";
        this.div.style.height = 100+"px";
        this.div.style.background = this.bg;
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        document.body.appendChild(this.div);
    }
}