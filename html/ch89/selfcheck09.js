//1. 1부터 999까지 짝수가 몇개인지 출력하는 코드
// let s1 = 1;
// var count = 0;
// while (s1 < 1000) {
//   if (s1 % 2 === 0) console.log(s1);

//   s1++;
// }

//2. 구구단 1단부터 9단까지 한번에 출력
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i + "X" + j + "=" + i * j);
//   }
// }

//3. 100부터 999까지 정수 중에 암스트롱 수에 해당한느 숫자를 모두 출력하는 코드
let temp = 999;
let st = String(temp);
let nt0 = st[0];
let nnt0 = nt0 ** 3;
let nt1 = st[0];
let nnt1 = nt1 ** 3;
let nt2 = st[0];
let nnt2 = nt2 ** 3;
let nntsum = nnt0 + nnt1 + nnt2;
console.log(nntsum);
if (temp === nntsum) console.log(nntsum + "암스트롱 숫자");
else console.log(nntsum + "암스트롱 숫자가 아니다");

for (let i = 100; i < 1000; i++) {
  //문자열로 바꾸고 "100" 인덱스 0으로 가져오고 '1', 1**3
  let sI = String(i); //"100"
  let ssum = 0;
  for (let j = 0; j < 3; j++) {
    ssum += sI[j] ** 3;
  }
}
