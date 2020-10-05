// 클래스명은 대문자로 시작한다. (OOP개발자들사이의 규칙,관례)
class Hero{

    // 생성자 메서드라 하며, 객체의 인스턴스 생성시 new 연산자에 의해 무조건 호출된다..
    // 생성자 메서드를 제공한느 이유는? ,
    // 모든 인스턴스가 같은 클래스로 부터 생성되다 보니, 모두 동일한 모습으로 태어남
    // 따라서 각각의 인스턴스마다 개성있는 데이터로 초기화 되려면,
    // 초기화를 시킬 수 있는 영역이 필요하며, 이 영역이 바로 생성자 메서드 영역이다.
    constructor(){
        console.log("저 지금 태어나면서 , 초기화 됩니다~");
        this.img = document.createElement("img");
        this.img.src = "../images/shooting/hero.png";
        this.img.style.position = "absolute";
        this.img.style.left = 0 + "px";
        this.img.style.top = 0 + "px";
        wrapper.appendChild(this.img);
    }
}