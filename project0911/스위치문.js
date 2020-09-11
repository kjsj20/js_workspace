var bg = parseInt(prompt("색상을 선택하세요"));

document.write("당신이 입력한 숫자는" + bg);

//무려 7개 이상이 되므로 , else if 문을 써야하지만,
//코드이 단순화 및 식별성을 위해 같은 목적이지만 좀 더 줄여쓰는 swich문
//swich(판단대상 데이터)
//case 의 조건이 참인 이후엔, break문이 없을 경우 조건을 따지지 않고 이하의 문장을
//수행해버림...break를 이용하여 else문의 효과를 내자
switch(bg){
    //1~7까지를 대상으로 case by case 를따져서 수행
    case 1: document.body.style.background = "red"; break;
    case 2: document.body.style.background = "orange"; break;
    case 3: document.body.style.background = "yellow"; break;
    case 4: document.body.style.background = "green"; break;
    case 5: document.body.style.background = "blue"; break;
    case 6: document.body.style.background = "navy"; break;
    case 7: document.body.style.background = "purple"; break;
    /* case 에 지정하지 않은 외에 모든~~데이터에 대한 처리 */
    default:alert("사용법을 제대로 알고 하세요 !!");
}