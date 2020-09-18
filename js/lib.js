//자주할 업무는 재사용을 위해 함수로 정의 
//두수 a,b에 대한절대값을 반환하는 함수!!
function getAbs(a, b) {
  //두수를 대상으로 절대값을 구하는 식
  return Math.abs(a - b); //함수를 호출한 실행부가 결과를 가지고
  //호출한곳으로 되돌아감
}

/*--------------------------------------------------------------------
랜덤 구하는 함수
n을 넣으면, 0~n까지의 랜덤한 수를 반환하는 함수
--------------------------------------------------------------------*/
function getRandom(n) {
  var r = Math.random();
  return Math.floor((n + 1) * r);
}