//게임에서 진행할 데이터를 생성하되, 순서를 갖게 해야한다.
//왜?? 엔터칠때마다 해당 당어의 다음단어, 그 다음단어 구현하려면 순서
//라는게 존재해야 하므로.

var question;
var txt;
var feedback;
var record;
var n = 0;
var score = 0;
var word = new Array();
word[0] = "광화문";
word[1] = "지하철";
word[2] = "소나기";
word[3] = "블랙홀";
word[4] = "핵전쟁";
word[5] = "짜장면";
word[6] = "제주도";
word[7] = "코로나";
word[8] = "청바지";
word[9] = "카메라";

window.addEventListener("load", function(){
    init();
    txt.focus();
});

function init(){
    question = document.querySelector("#question");
    txt = document.querySelector("#txt");
    feedback = document.querySelector("#feedback");
    record = document.querySelector("#record");

    //단어 출력
    printWord();
    //점수 출력
    printScore();
    //txt를 대상으로 키보드 이벤트 구현
    //총알이라면, 눌렀다는 이벤트에 반응하면 되지만
    //글씨 입력이라면, 눌렀다 떼었을때가 하나의 철자가 입력되는 시점이다.
    txt.addEventListener("keyup", function(){
        //키보드 중, 엔터키를 누를대 다음 단어 나오게 처리...
        // alert(event.keyCode);
        if(event.keyCode===13){
            if(question.innerText === txt.value){
                n++;
                score+=10;
                printWord();
                printScore();
                console.log(score);
                if(n>=word.length){
                    alert("게임종료");
                    question.innerText = "Game Clear!";
                }else{
                    feedback.innerText = "O";
                    txt.value = "";
                }
            } else{
                txt.value = "";
                feedback.innerText = "X";
                return;
            }
        }
    });
}

function printWord(){
    question.innerText = word[n];
}

function printScore(){
    record.innerText = `${score}점`;
}