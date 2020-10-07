// 영화 이미지 썸네일을 정의한다!!
class Thumbnail{
    constructor(container,width,height,bd,src,x){
        this.container = container;
        this.img = document.createElement("img");;
        this.div = document.createElement("div");
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.bd = bd; // 보더 두께 
        var me = this;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.border = this.bd + "px solid white";
        this.div.style.boxSizing = "border-box";
        this.img.src = src;

        this.img.style.width = (this.width - (bd*2)) + "px";
        this.img.style.height = (this.height - (bd*2)) + "px";

        this.img.addEventListener("click", function(){
            // 이벤트 구현시 사용되는 익명함수내에서 this를 사용하게 되면,
            // 객체의 인스턴스를  가리키게 되는 것이 아니라, 익명함수의 {} 영역을 가리키게 된다..
            // 현재 객체가 배열의 몇번째 인지 알아 맞추기!!
            var index = thumbArray.indexOf(me);
            getDetail(index);
            // 포인터의 targetX값을 나의 좌표와 일치
            pointer.targetX = me.x;
        });

        this.div.appendChild(this.img);
        this.container.appendChild(this.div);
    }
}