let count = 1;
let n;
let path;

function createBall(){
    let img = document.createElement("img");
    n = document.querySelector("#txt").value;
    n = parseInt(n);//주의) parseInt() 대상이 될 수 있는건 "쌍따옴표"를
    path = document.querySelector("#path").value;
    //벗겻을때 정수가 될 수 있는 문자만 가능하다.
    img.src = (count % n == 0) ? path : "../images/ball/ball1.png";

    // img.src = path;
    
    count++;

    img.style.width = 10 + "%";
    document.body.appendChild(img);    
}

function auto(){
    setInterval("createBall()", 500);
}