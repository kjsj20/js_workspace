let count = 1;

let n = prompt("몇 번째마다 다른공을 출력할래요?");

function createBall(){
    let img = document.createElement("img");
    console.log(count);

    // if (count % 5 === 0){
    //     img.src = "../images/ball/ball2.png"
    // } else {
    //     img.src = "../images/ball/ball1.png"
    // }
    
    img.src = (count % n == 0) ? "../images/ball/ball2.png" : "../images/ball/ball1.png";
    
    count++;

    img.style.width = 10 + "%";
    document.body.appendChild(img);    
}