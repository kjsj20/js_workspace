/*
해결할점
1) 날짜 출력은 각 월의 마지막날까지만 ...예) 10월의 경우 31일 까지...

2) 각월의 시작 요일이 반영되게...

*/
var head, content, info;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let startDay;
let currentYear;
let currentMonth;
let d = new Date(); //디폴트는 오늘날짜임..  
function createDay(){
    for(var i = 0; i<days.length; i++){
        new Cell(content, 100, 100, days[i], "skyblue");
    }
}

function createCell(){
    let n = 0;
    var num = 0;

    for(a = 0; a < 6; a ++){
        for(i = 0; i < 7; i ++){
            var txt = "";
            var mon = 0;
            // 월별 일 수 계산식 .. 좋은방법이 있을까 ??? 배열 ..? 객체 ??..
            if(currentMonth === 1 || currentMonth === 3 || currentMonth === 5 || currentMonth === 7 || currentMonth === 8|| currentMonth === 10 || currentMonth === 12){
                mon = 31;
            } else if (currentMonth === 4 || currentMonth === 6 || currentMonth === 9 || currentMonth === 11) {
                mon = 30;
            } else {
                if(currentYear % 4 === 0){
                    mon = 29;
                } else{
                    mon = 28
                }
            }

            if(num === mon){
                break;
            }
            if(n >= startDay){
                num++;
            } else {
                txt= "";
            }
            new Cell(content, 100,100, num === 0 ? "" : num, num === 0 ? "#E2E2E2": "white");   

            n++;
             //무조건 함녀 안되고, 각 월마다 시작 요일을 알아내서, 그 요일서 부터 이 작업을 수행
        }
    }
}

// 현재날짜 구하기
function getCurrentDate(){
    currentYear = d.getFullYear();
    currentMonth = d.getMonth() + 1;
    printDate(currentYear, currentMonth);
    d.setDate(1);
    startDay =  d.getDay();
}

//원하는 날짜를 조작할 수 있는 함수!!
function getCustomDate(){
    d.setFullYear(currentYear);
    d.setMonth(currentMonth - 1);
    d.setDate(1);
    startDay = d.getDay();
    content.innerHTML = "";
    createDay();
    createCell();
}

//원하는 날짜를 출력하는 함수
function printDate(yy,mm){
    if(mm < 10){
        info.innerHTML = `${yy}년0${mm}월` 
    } else{
        info.innerHTML = `${yy}년${mm}월` 
    }
}

// 현재 보고있는 날짜의 이전 월 구하기
function prev(){
    currentMonth > 1 ? currentMonth -= 1 : currentMonth = 0; 
    if(currentMonth === 0){
        currentYear = currentYear -=1; 
        currentMonth = 12;
    }; 
    printDate(currentYear, currentMonth);
    getCustomDate();
}

// 현재 보고있는 날짜의 다음 월 구하기
function next(){
    // currentMonth += 1; 
    currentMonth < 12 ?   currentMonth += 1 : currentMonth = 13; 
    if(currentMonth === 13){
        currentYear = currentYear +=1; 
        currentMonth = 1;
    }
    printDate(currentYear, currentMonth);
    getCustomDate();
}

function init(){
    head = document.getElementById("head");
    content = document.getElementById("content");
    info = document.getElementById("info");
}

window.addEventListener("load", function(){
    init();
    getCurrentDate();
    createDay();
    createCell();
});