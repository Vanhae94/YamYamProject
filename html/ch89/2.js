var a = 5;
var b = "kkk";
let c = true; //변수 선언, 에러 없이 잘 처리되므로 많이 사용하지만, 변수가 변해도 에러가 나지 않는다는 것을 명심하고 사용한다.
const d = 200; //상수 선언 => 값이 변할 수 없다.

var a = "kkk"; //에러 없음 동일한 변수를 2번 선언해도 오류 없음
var b = 500;
/*let*/ c = true; //사용 .자바언어에서 사용하는 변수 성격, 2번 선언 안됨
// d = 200; //상수의 값은 변할 수 없다.

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("it " + a + " aa");
console.log("문자열은 큰따옴표(\")나 작은따옴표(')로 감싸면 됩니다.");

let n1 = 0.1;
let n2 = 0.2;
let sum = n1 + n2;
console.log(sum);
console.log(10 > 5);
console.log(true & true); //그리고
console.log(true & false);
console.log(true | false); //또는
console.log(!true); //부정 not

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);
console.log(boolean2);

let boolean3 = 10 < 20;
let boolean4 = 10 > 20;
console.log(boolean3);
console.log(boolean4);

// let nn;
// console.log(nn);

let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
console.log(string);

let studentScore = [100, 90, 87, 55, 100];
console.log(studentScore[2]);
let array = ["a", "b", true, 1, 1.0, null, undefined];
for (let i = 0; i < array.length; i++) {
  //순서대로 출력
  console.log(array[i]);
}
let array1 = ["a", "b", true, 1, 1.0, null, undefined];
for (let i = array1.length - 1; i >= 0; i--) {
  //거꾸로 출력
  console.log(array[i]);
}
let array2 = []; //빈배열 생성
array2.push(10); //변수 값 넣기
console.log(array2);
console.log(array2.pop()); //변수 안넣는다, 배열안에 있는 마지막 자료를 꺼내서 보여주고 삭제
console.log(array2);

// let r = array2.find(0);
// console.log(r);

//객체 리터럴
let sS = {
  name: "홍길동",
  number: "548",
  kor: 80,
  eng: 70,
  math: 90,
  science: 95,
};
//출력
console.log(sS.name);
console.log(sS["number"]);
console.log(sS.kor + sS.eng + sS.science);
//수정
//홍길동->이순신 kor 80 ->85
sS.name = "이순신";
sS.kor = 85;
console.log(sS.name);
console.log(sS.kor + sS.eng + sS.science);
//키 추가
//전화번호
console.log(sS);
sS.phone = "010-1234-5678";
console.log(sS);
//연산
console.log(2 ** 4);
console.log(10 == "10");
console.log(10 === "10");
let x1 = 5;
let x2 = 10;
let x3 = 80;
// let max = x1 > x2 ? x1 : x2;
// console.log(max);
//삼항 연산자
let max = x1 > x2 ? (x1 > x3 ? x1 : x3) : x2 > x3 ? x2 : x3;
console.log(max);
//암시적 형 변환
const result = 10 + "10";
console.log(result);

let num = 10;
let StrNum = "10";
if (num == StrNum) {
  console.log(`equals`);
}

//명시적 형 변환
let num1 = 10;
let StrNum1 = "10";
if (String(num) == StrNum) {
  console.log(`equals`);
}
const result1 = 10 + parseInt("10"); //문자를 숫자로 parseInt("숫자")
console.log(result1);

const result2 = String(10) + parseInt("10"); //숫자를 문자로 String(숫자)
console.log(result2);

//p381
let obj = {
  name: "철수",
  age: 20,
};
for (let key in obj) {
  console.log(obj[key]);
}
let arr = [10, 20, 30];
for (let i in arr) {
  console.log(i);
}
let arr1 = [10, 20, 30];
for (let i in arr1) {
  console.log(arr1[i]);
}

let arr2 = [10, 20, 30];
for (let i in arr2) {
  if (arr2[i] === 20) break;
  console.log(arr2[i]);
}
let arr3 = [10, 20, 30];
for (let i in arr3) {
  if (arr3[i] === 20) continue;
  console.log(arr3[i]);
}
