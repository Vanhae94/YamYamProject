// 변수선언
var a=5;
var b="kkk";
let c = true;
const d = 200; // 상수 선언 - 값이 바뀌면 안됨

var a="kkk"; // 에러없음 -> 동일한 변수를 두 번 선언해도 오류 없음 (자료형이 변해도)
var b=500; 
c = true; // 자바언어에서 사용하는 변수 성격, 즉 두 번 선언하면 안됨
//d = 200;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(" It's   ");
console.log(' It"s"   ');
console.log(" It"+ a + " aa   ");
console.log("\t\t문자열은 큰따옴표(\n)나 작은따옴표(\t)로 감싸면 됩니다.")

let n1=0.1;
let n2=0.2;
let sum = n1+n2;
console.log(sum);

console.log(10>5);
console.log(true&true); // 그리고
console.log(true&false);
console.log(true|false); // 또는
console.log(!true); // 부정 not

let nn = null;
console.log(nn);

let studentScore = [100,90,87,66,100]; // 배열
console.log(studentScore[2]); 
let array=['a',"b",true,1,1.0,null,undefined];
console.log(array);
for(let i=array.length-1; i>=0; i--) {
    console.log(array[i] + "~");
}

let array2 = [];
array2.push(10);
array2.push(20);
console.log(array2);
console.log(array2.pop());
console.log(array2);
let r = array2.find(a => a+10);
console.log(r);

// 객체 리터럴
let sS = {
    name:"홍길동",
    number:"5478",
    kor:80,
    eng:70,
    math:90,
    science:60
};
// 객체 리터럴에 있는 값 출력
console.log(sS.name);
console.log(sS["number"]);
console.log(sS.kor + sS.eng +sS.math + sS.science);

// 홍길동 -> 이순신

sS.name = "이순신";
sS.kor = 85;
console.log(sS.name);
console.log(sS.kor + sS.eng +sS.math + sS.science);

// 전화번호 키를 추가하기
sS.phone = '010-1234=5678'
console.log(sS);
console.log(2**3);
let x = -10;
x=-x;

console.log(10=="10");
console.log(10 === "10");
let x1 = 5;
let x2 = 10;
let x3 = 8;
let max = x1>x2 ? (x1>x3 ? x1:x3) : x2>x3 ? x2:x3;
console.log(max);

// 숫자를 문자로 String(n)
// 문자를 숫자로 바꾸기 parse 

let obj = {

};
for (let key in obj){
    console.log(obj[key]);
}

let s1 = 1;
while(s1 <1000) {
    if (s1%2===0){
        console.log(s1);
    }
    s1++;
}

for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i + "x" + j + "=" + i*j);
    }
}

let temp = 213;
let st = String(temp)
let nt = st[0];
let nnt = nt**3;
let nt1 = st[1];
let nnt1 = nt1**3;
let nt2 = st[2];
let nnt2 = nt2**3;
let nntsum = nnt + nnt1 + nnt2;
if(temp == nntsum) console.log(nntsum + "암스트롱 수다");
else console.log(nntsum + "암스트롱 숫자가 아니다");

console.log(nntsum);
for(let i = 100; i<1000; i++ ){
    let ss = String(i);
    let a = ss[0];
    let at = a**3;
    let b = ss[1];
    let bt = b**3;
    let c = ss[2];
    let ct = c**3;
    let abcsum = at+bt+ct;
    if(i == abcsum) console.log(i + "는 암스트롱 수다");
}

