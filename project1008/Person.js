// 모든~~인종을 아우를 수 있는 최상위 객체인 사람을 정의한다!
class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        console.log("I am super class(Person)");
        console.log("my eye %d, arm %d", this.eye, this.arm);
    }
    // 행동은 함수로 표현한다.
    walk(){
        console.log("두발로 걸어요")
    }

    speak(){
        console.log("말을 해요");
    }
}