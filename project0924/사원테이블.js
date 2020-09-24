var empno, ename, job, mgr, hiredate, sal, comm, deptno, content;
// var emp = new Array(); //사원정보를 누적시킬 배열
//(사원정보를 담는 1차원 member 배여을 담을)
function regist() {
    var member = new Array(8);
    member[0] = empno.value; //EMPNO
    member[1] = ename.value; //ENAME
    member[2] = job.value; //JOB
    member[3] = mgr.value; //MGR
    member[4] = hiredate.value; //HIREDATE
    member[5] = sal.value; //SAL
    member[6] = comm.value; //COMM
    member[7] = deptno.value; //DEPTNO

    //생성된 member 배열을 emp에 추가하자~~
    emp.push(member);
    getList();
}

//현재까지 emp에 누적된 사원정보를 출력하는 함수
function getList() {
    var str = "";
    str += "<table border = '1px' width = '100%'>";
    
    for(i=0; i<emp.length;i++){
        str += "<tr>";
        for(j=0; j<emp[i].length; j++){
            str += "<td>";
            str += emp[i][j];
            str += "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    content.innerHTML = str;
}

window.addEventListener("load", function () {
    init();
});

function init() {
    empno = document.getElementById("empno");
    ename = document.getElementById("ename");
    job = document.getElementById("job");
    mgr = document.getElementById("mgr");
    hiredate = document.getElementById("hiredate");
    sal = document.getElementById("sal");
    comm = document.getElementById("comm");
    deptno = document.getElementById("deptno");
    content = document.querySelector(".content");
    emp = [["EMPNO", "ENAME", "JOB", "MGR", "HIREDATE", "SAL", "COMM", "DEPTNO"]];
    getList();
}

function createDump(){
    emp =[ 
        [7369, "SMITH", "CLERK",7902,"80/12/17",800,"NULL",20],
        [7499, "ALLEN","SALESMAN",7698,"81/02/20",1600,300,30],
        [7521, "WARD","SALESMAN",7698,"81/02/22",1250,500,30],
        [7566, "JONES","MANAGER",7839,"81/04/02",2975,"NULL",20],
        [7654, "MARTIN","SALESMAN",7698,"81/09/28",1250,1400,30],
        [7698, "BLAKE","MANAGER",7839,"81/05/01",2850,"NULL",30],
        [7782, "CLARK" ,"MANAGER",7839,"81/06/09",2450,"NULL",10],
        [7788, "SCOTT","ANALYST",7566,"87/04/19",3000,"NULL",20],
        [7839, "KING","PRESIDENT","NULL","81/11/17",5000,"NULL",10],
        [7844, "TURNER","SALESMAN",7698,"81/09/08",1500,0,30],
        [7876, "ADAMS","CLERK",7788,"87/05/23",1100,"NULL",20],
        [7900, "JAMES","CLERK",7698,"81/12/03",950,"NULL",30],
        [7902, "FORD","ANALYST",7566,"81/12/03",3000,"NULL",20],
        [7934, "MILLER","CLERK",7782,"82/01/23",1300,"NULL",10],
    ];
    getList();
}