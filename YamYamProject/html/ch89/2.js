var a=5;
var b="kkk";
let c=true;
const d=200;

var a='kkk'; //에러 없음. 동일한 변수를 2번 선언해도 오류 없음
var b=500;
c=true; //자바언어에서 사용하는 변수 성격. 즉, 2번 선언하면 안됨
//d=300;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("It's     ");
console.log("It's'     ");
console.log('\t\t문자열은 큰따옴표(\n")나 작은따옴표(\t)로 감싸면 됩니다.')

let n1=0.1;
let n2=0.2;
let sum=n1+n2;
console.log(sum);
console.log(10>5);
console.log(true&true);
console.log(true&false);
console.log(true|false);
console.log(!true); //부정 not

let array2=[];
array2.push(10);
array2.push(20);
console.log(array2);
console.log(array2.pop());
console.log(array2);
let r = array2.find((a)=>a+10);
console.log(r);

//객체리터럴
let sS = {
    name: "홍길동",
    number: "5478",
    kor: 80,
    eng: 70,
    math: 90,
    science: 60,
};
//객체 리터럴에 있는 값 출력
console.log(sS.name);
console.log(sS['number']);
console.log(sS.kor + sS.eng + sS.math + sS.science+"점");

// 홍길동 이름을 이순신으로 바꾸기
sS.name= "이순신";
// kor 85 로 바꾸기
sS.kor = 85;
console.log(sS.name);
console.log(sS.kor + sS.eng + sS.math + sS.science+"점");
//전화번호 키 추가하기
sS.phone = '010-1234-5678';
console.log(sS);
console.log( 2**3 );

let x=10;
x= -x;

console.log( 10 == '10' );
console.log( 10 === '10' );

let x1 = 5;
let x2 = 10;
let x3 = 8;
let max = x1> x2 ? (x1 > x3 ? x1 : x3): x2 > x3 ? x2 : x3 ;
console.log (max);

const result = 10 + parseInt("10");
console.log(result);

const result2 = String(10) + parseInt("10"); //숫자를 문자로 String(숫자)
//문자를 숫자로 바꾸기 parseInt("숫자")
console.log(result2);

//381p
let obj = {
    name : "철수",
    age: 20,
};
for(let key in obj) {
    console.log(obj[key]);
}

let arr = [10,20,30];
for(let i in arr){
    if (arr [i]===20) break;
    console.log(arr[i]);
}

//셀프체크
//1~999까지 짝수가 몇개인지 출력하는 코드 짜기
let s1=1;
while(s1<1000) {
    if(s1 % 2 === 0) console.log(s1);
    s1++;
}

//구구단 1단부터 9단까지 한번에 출력하는 코드
for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i + "X" + j + "=" + i*j);
    }
}

// 100부터 999까지의 정수 중에서 암스트롬 수에 해당하는 숫자를 모두 출력
let temp=222;
let st = String(temp);
let nt0 = st[0];
let nnt0 = nt0 ** 3;
let nt1 = st[1];
let nnt1 = nt1**3;
let nt2 = st[2];
let nnt2 = nt2 ** 3;
let nntsum = nnt0 + nnt1 + nnt2;
console.log(nntsum);
if(temp === nntsum) console.log(nntsum+"암스트롱 숫자");
else console.log(nntsum + "암스트롱 숫자가 아니다")

for(let i=100; i<1000; i++){
    //문자열로 바꾸기 "100" 인덱스 0으로 가져오고  "1", 1 **3
    let sI = String(i); //"100"
    let sum = 0; 
    for(let j=0; j<3; j++) {
        sum +=  (sI[i] ** 3);
    }
    if(sum==i) console.log(nntsum+"암스트롱 숫자");
}



