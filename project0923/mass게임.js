var cellWidth = 40;
var cellHeight = 40;
var wrap;
var row = 10;
var col = 10;
var cellArray = new Array(row * col); //모든 셀을 순서있게 담아놓을 배열 선언
var index = 0;
function createFrame() {
    wrap = document.createElement("div");
    wrap.style.margin = "auto";
    wrap.style.background = "dodgerblue";
    wrap.style.overflow = "hidden";
    wrap.style.width = (cellWidth * col) + "px";
    wrap.style.height = (cellWidth * row) + "px";
    //배경 사진
    wrap.style.backgroundImage = "url(../images/travel/1.jpg)";
    wrap.style.backgroundSize = parseInt(wrap.style.width) + "px " + parseInt(wrap.style.height) + "px";
    document.body.appendChild(wrap);
}

//셀 설정
function createCell() {
    var n = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var cell = document.createElement("div");
            cell.style.width = cellWidth + "px";
            cell.style.height = cellHeight + "px";
            cell.style.border = "1px solid yellow";
            cell.style.boxSizing = "border-box";
            cell.style.background = "green";
            cell.style.opacity = "1";
            cell.style.float = "left";
            wrap.appendChild(cell);
            //지금 생성된 이 셀을 배열에 넣자
            cellArray[n] = cell;
            n++;

            cell.addEventListener("mouseover", function(){
                //콜백함수내에서는 이벤트를 발생시킨 주체 컴포넌트를
                //사용할 수 있다.. 이때 사용되는 this 란 변수이며, 이 변수명은
                //이미 시스템에서 정해놓은것이다.. 즉 물체 스스로를 가리키는
                //변수이다..
                this.style.opacity = 0;
            });
        }
    }
}

function setOpacity(){
    //배열의 크기만큼 반복문으로 처리
    // for(var i = 0; i<row;i++){
    //     for(var j=0;j<col;j++){
    cellArray[index].style.opacity=0;
    if(index < cellArray.length -1){
        index++;
    }
    //         n++;
    //     }
    // }
}

function createButton(){
    var bt = document.createElement("button");
    bt.innerText ="해답보기";
    document.body.appendChild(bt);
    bt.addEventListener("click", function(){
        setInterval("setOpacity()", 1);
    });
}

window.addEventListener("load", function () {
    init();
});

function init() {
    createFrame();
    createCell();
    createButton();
}