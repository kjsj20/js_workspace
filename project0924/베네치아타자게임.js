var stage;
var level = 0; //게이머의 현재 레벨을 표현하는 변수
var spanArray = new Array();
var stepY = 5;
var flag = false;
var sel;
var hpBox;
var scoreBox;
var score = 0;
var itemBox;
var keyword; //텍스트 입력 박스
/*
    타자게임에 등장할 모든 단어 데이터베이스 2차원 배열인 이유는?
    stage가 여러판이기 때문에 ...
*/
var word = [
    ["쌀", "마우스", "총", "칼", "창", "수영", "산기슭", "덤벨", "모니터", "인도양"],
    ["키보드", "태평양", "온천", "감기", "멕시코", "자바", "오라클", "쌀밥", "귀", "돼지"],
    ["직박구리", "돌풍", "화성", "사과", "양초", "비타민", "책", "유산균", "버섯", "종이"],
    ["고구마", "울산", "화질구지", "2호선", "네덜란드", "강원도", "낫또", "양고기", "갤럭시", "옵티머스"],
    ["구로디지털단지", "이마트트레이더스", "탁자", "더블모니터", "냉장고", "신발", "균", "쇠", "사이버돌쇠", "아크메이지(불,독)"]
];

function createWord() {
    for (var i = 0; i < word[level].length; i++) {
        var span = document.createElement("span"); //inline 이므로 너비,높이가질수없고, 내부의 컨텐츠 만큼만 감싼다 wrapping
        span.innerHTML = word[level][i];
        span.style.position = "absolute";
        span.style.left = (i * 95) + "px";
        span.style.top = getRandomBetween(-200, 0) + "px"
        stage.appendChild(span);
        spanArray.push(span); //스팬을 배열에 보관!! 왜 보관 ? 추후 움직일 거니깐..
    }
}
//단어 내려오기 함수
function move() {
    if (flag) {
        // var len = ;
        for (var i = 0; i < spanArray.length; i++) {
            spanArray[i].style.top = parseInt(spanArray[i].style.top) + stepY + "px";
            //바닥에 닿았는지까지 판단!!
            if (parseInt(spanArray[i].style.top) >= 700) {
                console.log(spanArray[i]);
                spanArray.splice(i, 1);
                // console.log(word[level][i]);
            }
        }
    }
}

function startGame() {
    flag = true;
    keyword.focus();
}

//레벨을 선택할 옵션을 동적으로 생성
function createLevelOption() {
    for (var i = 0; i < word.length; i++) {
        var op = document.createElement("option")
        op.text = "레벨" + (i + 1);
        op.value = i;
        sel.add(op);
    }
}

function createHp() {
    for (i = 0; i < 9; i++) {
        var hp = document.createElement("div");
        hp.style.width = 60 + "px";
        hp.style.height = 60 + "px";
        hp.style.background = "red";
        hp.style.float = "left";
        hp.style.border = "2px solid yellow";
        hpBox.appendChild(hp);
    }
}
//점수를 출력하는 함수
function printScore() {
    scoreBox.innerHTML = score + "점";
}

function init() {
    stage = document.querySelector("#stage");
    sel = document.querySelector("#sel");
    hpBox = document.querySelector("#hpBox");
    scoreBox = document.querySelector("#scoreBox");
    keyword = document.querySelector("#keyword");

    //입력박스에 이벤트 구현 
    //addEventListeneer() 이용하면 두번째의 익명함수의 매개변수로 event 객체가 전달된다.
    keyword.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            // alert("나눌렀어?");
            for (i = 0; i < word[level].length; i++) {
                if (keyword.value === word[level][i]) {
                    stage.removeChild(spanArray[i]);
                    score += 10;
                    printScore();
                }
            }
            keyword.value = "";
        }
    });
}

window.addEventListener("load", function() {
    init();
    createWord();
    setInterval("move()", 50);
    createLevelOption();
    createHp();
    printScore();
})