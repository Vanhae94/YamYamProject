// 436page
//배열
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log("arr[i] : " + arr[i]);
}
//파괴적메소드
const arr1 = [10, 20, 30, 40];
arr1.push(50);
console.log("push : " + arr1);
arr1.pop();
console.log("pop : " + arr1);
arr1.unshift(0);
console.log("unshift : " + arr1);
arr1.shift();
console.log("shift : " + arr1);
//sort
//자바와 동일, a===b 같으면 0 반환, a>b 양수 반환 a<b음수반환
//오름차순 정렬
const arr2 = [10, 20, 30, 40, 9, 88, -20, -3];
arr2.sort((a, b) => a - b);
console.log("sort_arr2 오름차순: " + arr2);
//내림차순 정렬
arr2.sort((a, b) => b - a);
console.log("sort_arr2 내림차순 : " + arr2);

const arr3 = ["a", "k", "pa", "apple", "pp", "q"];
arr3.sort();
console.log("sort_arr3 : " + arr3);
arr3.reverse();
console.log("reverse_arr3 : " + arr3);
let sarr3 = arr3.join("-");
console.log("join-arr3 : " + sarr3);
//비파괴적 메소드
//forEach : 반복해서 연산
//1. 배열의 값 or 연산값
const arr4 = [10, 20, 30, 40];
arr4.forEach(function (v) {
  console.log("forEach_arr4 : " + (v + 10));
});
//2. 값과 인덱스 출력
arr4.forEach(function (v, i) {
  console.log(" `${v} -${i}` : " + `${v} -${i}`);
});
//3.화살표함수 표현
arr4.forEach((v, i) => {
  console.log(" 화살표함수표현 : " + `${v} +${i}`);
});
//forEach의 반환은 없다 =>undefined
const r = arr4.forEach((v, i) => {
  console.log(`${v} +${i}`);
});
console.log("forEach 변수선언" + r);

//정리 배열 반복문으로 출력
//방법1 반복문으로출력하기
for (let i = 0; i < arr4.length; i++) {
  console.log("forEach 반복1 : " + arr4[i]);
}
//방법2 forEach()함수 출력
arr4.forEach((v) => {
  console.log("forEach 반복2 : " + v);
});
//방법3 filter()함수 출력_30보다 큰 수 출력
const arr5 = [10, 20, 30, 40];
const arr5Re = arr5.filter((v) => (v >= 30 ? v : 0));
arr5Re.forEach((v) => console.log("forEach 반복3 : " + v));
//map : 판단하여 조건문 반환
const arr5MapResult = arr5.map((v, i) =>
  i % 2 == 0 ? "짝수인덱스" : "홀수인덱스"
);
arr5MapResult.forEach((v) => console.log("map : " + v));

//날짜와 시간
const date1 = new Date("2022-12-23");
const date2 = new Date("2022-12-25");
const dateDiff = date2.getTime() - date1.getTime();
const interval = dateDiff / (24 * 60 * 60 * 1000);
console.log(interval);
