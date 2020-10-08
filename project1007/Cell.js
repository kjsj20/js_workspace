let divArr = new Array();

class Cell{
    constructor(container, width, height, text, color, count){
        this.div = document.createElement("div");
        // this.div.id = count;
        this.width = width;
        this.height = height;
        this.container = container;
        this.color = color;
        this.text = text; //박스안에 작성할 내용(문자,숫자 모두 올수있음.)

        // 스타일 적용
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background= color;
        this.div.style.border="1px solid orange";
        this.div.style.boxSizing = "border-box";
        this.div.style.float="left";
        // 텍스트 출력
        this.div.innerHTML = "<h3>" + this.text + "</h3>";

        this.container.appendChild(this.div);
        divArr.push(this.div);
    }
}