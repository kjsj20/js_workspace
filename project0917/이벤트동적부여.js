
    /*  
        우리가 지금까지 사용해왔던html의 모든~
        이벤트 핸들러(onClick,onLoad,onMouseOver,onKeyDown...)
        는 모두 자바스크립트로도 처리가 가능하다!!
    */
    
    //onLoad에 대한 자바스크립트 처리 방법
    window.addEventListener("load",function(){
        //alert("문서가 로드되었네요")
        var bt = document.createElement("button");
        bt.innerText = "나 눌러봐";
        //bodyd에 추가하기!
        document.body.appendChild(bt);
        //버튼에 클릭이벤트 부여하기
        bt.addEventListener("click", function(){
            alert("나 눌렀어?");
        })
        }
    );
