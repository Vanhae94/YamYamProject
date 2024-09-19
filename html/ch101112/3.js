//console.log안에 변수 값 출력
let a = 10; //정수형
let b = "abc"; //문자형 " "
let c = "abc"; //문자형 ' '
let d = true; //논리형
let e = null; //e 변수안에 값을 나중에 넣겠다.
let f = undefined; //변수 안에 값을 정의하지 않겠다.변수만 만들어 놓고 값을 안 넣은 상태.
let h; //변수 안에 값을 정의하지 않겠다. 변수만 만들어 놓고 값을 안 넣은 상태.
console.log(a + " 입니다.");
console.log(`${a} ${b} ${c} ${d} 
    ${e} ${f} ${h} 입니다.`);

//405 1분 퀴즈 가장 큰 수 출력
//화살표 함수 작성 = 50
const getArrayMaxNumber = (a) => {
  let m = -9999;
  for (let i = 0; i < a.length; i++) {
    if (m < a[i]) m = a[i];
  }
  return m;
};
const max = getArrayMaxNumber([10, 50, 30]);
console.log(`${max}`);

//p406
//스포크 = 생명주기 = life cycle
let aa = 10;
const faa = () => {
  let bb = 100;
  console.log(`${aa + bb}`);
}; //함수만들기
faa();
console.log(`${aa}`);
console.log(`${faa}`);
//console.log(`${bb}`); //지역변수

let aaaa = 10; //전역변수 = 전역스코프
{
  let bbbb = 100; //지역변수 = 지역스코프
  console.log(`${aaaa + bbbb}`);
}
console.log(`${aaaa}`);
//console.log(`${bbbb}`); // 지역 범위를 벗어나 사용불가

//참조우선순위
//같은 스코프 안에서는 사용불가
//다른 스코프 영역에서 같은 변수일 경우 가까운 것을 사용한다.
let aaaaa = 10;
{
  let aaaaa = 100;
  console.log(`${aaaaa}`); //가까운것 사용 100
}
console.log(`${aaaaa}`); //같은 영역 사용 10

//호이스팅 -var
//함수 기본형만 가능
//위에서부터 해석하는 것이 기본이나, 위에서 값이 지정되지 않은 변수가 먼저 코딩된다면,
//변수 선언부만 끌어올려 undefined 출력
console.log(num);
var num = 20;

printHello(); //함수 호출
function printHello() {
  //함수 선언
  console.log("hello");
}
//호이스팅X
//printHello(); //함수 호출
//var printHello() => {
//  //함수 선언
//  console.log("hello");
//}

//var는 같은 변수를 선언해도 오류가 나지 않는다.
var name = "aaa";
var name = 100;

//p412 1분퀴즈
var text = "outside";
function printScope() {
  console.log(text); //호이스팅 우선순위가 전역변수보다 높다. = undefined
  var text = "inside";
}
printScope();

//즉시실행함수
//const a = (x,y) => {}; //함수 선언
//a(10,20); //함수 호출
//즉시실행함수로 수정
const result = ((x, y) => {})(10, 20);

//p414 1분퀴즈
const result3 = (function (a, b) {
  function init() {
    return doSum(a, b);
  }
  function doSum(a, b) {
    return a + b;
  }
  return init();
})(10, 20);
console.log(result3);

//화살표 함수로 수정
const result4 = ((a, b) => {
  return a + b;
})(10, 20);
console.log(result4);
