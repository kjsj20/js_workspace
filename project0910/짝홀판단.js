var msg; //짝수 or 홀수를 담게될 변수

function openPrompt(){
    //자바스크립트에 이미 내장된, 함수인 prompt()를 호출해보자
    //프롬프트 창에 사용자가 입력한 데이터는 확인버틈 누름과 동시에
    //반환된다. 그 반환된 값을 n변수에 대입해놓자!!
    var n = prompt("원하시는 숫자를 넣어주세요");
    // alert("당신이 입력한 값은" + n + "입니다.")
    //짝수인지 아닌지를 판단하는 방법
    //어떤수를 2로 나누어서 나머지가 0 이면 짝수, 아니면 홀수
    //삼항연산자의 용도 : 판단대상이 단 2가지로만 분류될때(흑백논리)
    //사용함 if else문 대체
    msg = (n % 2 === 0) ? "짝수":"홀수";

    //문서내의 result라 불리는 아이디를 갖는 요소의 value값에 결과문자를 넣자.
    document.getElementById("result").style.background="yellow";
    document.getElementById("result").value = msg ;
}