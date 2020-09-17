
let detailImg; //createDetail() 함수가 호출될때, 이 값이 곧 채워질거임..
//전역변수로 선언되어 있어야, 다른 함수들에서 접근이 가능

window.addEventListener("load", function () {
    createThumb();
    createDetail();
});

function createThumb() {
    for (i = 1; i <= 10; i++) {
        let thumbImage = document.createElement("img");
        thumbImage.src = "../images/view/" + i + ".jpg"
        let thumbDiv = document.querySelector(".thumb");
        thumbDiv.appendChild(thumbImage);

        //프로그래밍 적으로 이벤트 구현하기!!
        //아래의 콜백함수는 click이라는 이벤트가 발생할때만 수행되므로,
        //코드 위쪽에 명시된 포문의 i를 사용할 수 없다...
        //왜? 클릭이 일어난 시점에는 이미 포문의, i는 11이므로...
        //해결책?? 더 배워야 한다...
        thumbImage.addEventListener("click", function () {
        //이벤트 핸들러내에서는, 이벤트를 일으킨 주체를
        //this를 가리킬 수 있다.
            console.log(this.src);
            detailImg.src=this.src;
        });
    }
}
function createDetail() {
       //이미지 생성후, 전역변수로 대입!!
       detailImg = document.createElement("img"); // <img/> 동일

       detailImg.src="../images/view/1.jpg"; //<img src=""/> 동일 
       var detailDiv=document.querySelector(".detail");
   
       //div에 이미지 부착 
       detailDiv.appendChild(detailImg);
}