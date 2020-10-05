//적군을 정의한다!!
class Enemy{
    //적군이 태어날때 어떤 속성(특징)으로 태어날지를 결정하는 생성자
    constructor(container, x, y, width, height, src){
        this.img = document.createElement("img");
        this.img.src = src;
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.left = x + "px";
        this.img.style.top = y + "px";
        this.img.style.position = "absolute";
        container.appendChild(this.img);
    }

    move(){

    }
}