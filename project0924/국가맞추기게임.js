var data = new Array(); // 국가 데이터를 담을 배열 선언
var nation;
var hint;
var anwser;
var score;
var scoreResult = 0;
var index = 0;
var txt;
var img;

function createimg() {
    img = document.createElement("img");
    img.style.width = 500 + "px";
    img.style.height = 500 + "px";
    nation.appendChild(img);
}

function setData() {
    img.src = data[index][0];

    hint.style.fontSize = 50 + "px";
    hint.style.textAlign = "center";
    hint.style.lineHeight = 200 + "px";
    hint.innerText = data[index][1];
}

function init() {
    data = [
        ["../images/nation/1.png", "세계최대강대국", "미국"],
        ["../images/nation/2.jpg", "산초", "멕시코"],
        ["../images/nation/3.jpg", "로마제국", "이탈리아"],
        ["../images/nation/4.png", "신사의 나라,007", "영국"],
        ["../images/nation/5.jpg", "나찌", "독일"],
        ["../images/nation/6.png", "무적함대", "스페인"],
        ["../images/nation/7.jpg", "에펠탑", "프랑스"],
        ["../images/nation/8.gif", "차이코프스키", "러시아"],
        ["../images/nation/9.png", "쌈바축구", "브라질"],
        ["../images/nation/10.jpg", "아이스하키", "캐나다"],
        ["../images/nation/11.jpg", "후지산", "일본"],
        ["../images/nation/12.png", "쿵푸 팬더", "중국"],
        ["../images/nation/13.gif", "코알라", "호주"]
    ];

    //사용할 id 를 불러온다 
    nation = document.querySelector("#nation");
    hint = document.querySelector("#hint");
    anwser = document.querySelector("#anwser");
    score = document.querySelector("#score");
    txt = document.querySelector("#txt");

    //이미지 태그를 만들어주는 함수
    createimg();

    //데이터를 가져오는 함수
    setData();

    //key 이벤트를 불러옴 
    anwser.addEventListener("keyup", function() {
        if (event.keyCode === 13) { //엔터를 쳤는지 확인
            if (index < data.length - 1) { //a. 배열이랑 같아지거나 길어지는지 확인
                if (data[index][2] === txt.value) { // 입력값과 정답이 맞는지 확인
                    index++;
                    scoreResult += 10;
                    setData();
                } else { //정답이 틀리면 나오는 alert
                    alert("틀렸소...");
                }
                txt.value = "";
            } else if (scoreResult < (data.length * 10)) { //a. 게임이 끝나면 클리어가 나오도록 설정
                scoreResult += 10;
                nation.innerText = "Clear!";
            }
            score.innerText = scoreResult + "점";
        }
    });
}

window.addEventListener("load", function() {
    init();
    txt.focus();
});