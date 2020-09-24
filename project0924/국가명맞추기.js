        var question;
        var txt;
        var feedback;
        var record;
        var n = 0;
        var score = 0; //점수를 누적시킬 변수
        var pic;
        //단어 출력처리
        function printWord() {
            question.innerText = data[n][1];
        }

        //점수 출력처리 
        function printScore() {
            record.innerText = score + " 점";
        }

        function printFlag() {
            pic.src = data[n][0];
        }

        function init() {
            //아이디가 부여된 엘리먼트들을 전역변수로 미리 선언해 놓자!
            pic = document.getElementById("pic");
            question = document.getElementById("question");
            txt = document.getElementById("txt");
            feedback = document.getElementById("feedback");
            record = document.getElementById("record");

            //txt에 프로그래밍적으로 커서 올려놓기!!
            txt.focus();

            //txt를 대상으로 키보드 이벤트 구현
            //총알이라면, 눌렀다는 이벤트에 반응하면 되지만, 
            //글씨 입력이라면, 눌렀다 떼었을때가 하나의 철자가 입력되는 시점이다
            txt.addEventListener("keyup", function() {
                //console.log("철자를 쳤네요");
                //alert(event.keyCode);
                //키보드 중, 엔터키를 누를때 다음 단어 나오게 처리...
                if (event.keyCode == 13) { //Enter 아스키 코드값
                    //입력값과 출력된 단어와의 일치성을 판단한 후, 피드백 처리 
                    if (txt.value == data[n][2]) {
                        //칭찬의 피드백 O  출력
                        feedback.innerText = "O";
                        score += 10; //점수10점 증가 
                        printScore(); //점수출력
                        n++;
                        printFlag();
                    } else {
                        //틀렸다는 피드백 X 출력
                        feedback.innerText = "X";
                    }
                    //텍스트 박스에 입력한 데이터 초기화 
                    txt.value = "";

                    //다음 단어 나오게...

                    if (n >= data.length) { //준비된 단어가 모두 소진되면...
                        alert("게임종료");
                        question.innerText = "Game Over!!";
                    } else {
                        printWord();
                    }
                }
            });
        }

        window.addEventListener("load", function() {
            init();
            printWord();
            printScore();
            printFlag();
            txt.focus();
        });