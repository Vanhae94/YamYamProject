// console.log 안에 변수 값 출력
let a = 10; // 정수형
let b = "abc"; // 문자형
let c = 'abc'; // 문자형
let d = true; // 논리형
let e = null; // e 변수안에 값을 나중에 넣겠다는 의미
let f = undefined; // 변수안에 값을 정의하지 않겠다.
let h; // 변수안에 값을 정의하지 않겠다. 변수만 만들어놓고 값을 안넣은 상태
console.log(a + "입니다");
console.log(`${a} 입니다`);
console.log(`${a} ${b} ${c} ${d} ${e} ${f} ${h} 입니다`);

// 405 1분 퀴즈
// 화살표 함수 작성하기
const getArrayMaxNumber = (a) => {
    let max = -9999;
    for(let i=0; i< a.length; i++) {
        if(max <a[i]) max=a[i];
    }
    return max;
};

const max = getArrayMaxNumber([10,50,30]);
console.log(`${max}`); // 50 출력

//406 용어
// 스코프 = 생명주기 = life cycle

let aa = 10;
const faa = () => {
    let bb = 100;
    console.log(`${aa + bb}`);
} // 함수 만들기
// 함수 호출
faa();
console.log(`${aa}`);
//console.log(`${bb} 나는`);

var aaa = 10;
{
    var bbb = 100;
    console.log(`${aaa + bbb}`);
} // 함수 만들기

console.log(`${aaa}`);
console.log(`${bbb} 나는`);

let aaaa = 10;
{
    let bbbb = 100;
    console.log(`${aaaa + bbbb}`);
} // 함수 만들기

console.log(`${aaaa}`);
// console.log(`${bbbb} 나는`);

let aaaaa = 10;
{
    let aaaaa = 100;
    console.log(`${aaaaa}`);
} // 함수 만들기

console.log(`${aaaaa}`);

// 호이스팅 - var
console.log(num);

var num = 20;

// 함수 만들기
printHello();
function printHello (){
    console.log("hello");
};

// 414 1분 퀴즈
const result3 = (function(a,b) {
    function init() {
        return doSum(a,b);
    }
    function doSum(a,b){
        return a+b;
    }
    return init();
})(10,30);
console.log(result3);
