var head, photo, desc, thumb;
var thumbArray = new Array(); //Thumbnail 인스턴스를 보유할 배열
var pointer;
// 영화 목록을 생성한다.(데이터는 movie라는 변수에  json 형태로 들어있다.)
function createThumb(){
    // container,width,height,bd,src
    for(var i = 0; i < movie.marvel.length; i++){
        var json = movie.marvel[i];
        var obj = new Thumbnail(thumb,100,90,2,json.url, i * 100);
        thumbArray.push(obj);
    }
}

function createPointer(){
    // container,width, height, bd, x, y, targetX
    pointer = new Pointer(thumb,100,90,5,0,0,0);
}

function getDetail(index){
    //  1) 지금 선택한 썸네일을 크게 보여준다.
    var json = movie.marvel[index];
    photo.innerHTML = "<img src =\""+json.url+"\" width=\"100%\" height= \"100%\"/>"
    //  2) 영화 제목을 출력한다.
    head.innerHTML = json.title;
    //  3) 상세설명을 출력한다.

    var tag = "<ul>";
    tag+="<li>장르 :" + json.category_name; + "</li>";
    tag+="<li>개봉일 :" + json.release_date + "</li>";
    tag+="<li>예산 :" +json.budget+ "</li>";
    tag+="<li>수입 :" + json.gross + "</li>";
    tag+="<li>상영시간 :" + json.running_time + "</li>";
    tag+="</ul>"
    desc.innerHTML = tag;

    // 포인터 위치 변경 
    // pointer.targetX = index * 100;
}

function gameLoop(){
    pointer.tick();
    pointer.render();
}

function init(){
    head = document.getElementById("head");
    photo = document.getElementById("photo");
    desc = document.getElementById("desc");
    thumb = document.getElementById("thumb");
}

window.addEventListener("load",function(){
    init();
    createThumb();
    createPointer();
    document.body.addEventListener("keydown", function(){
        alert("키 눌렀어?");
    });
    setInterval("gameLoop()", 10);
});