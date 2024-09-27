//console.log 안에 변수 값 출력
let a=10; //정수형
let b="abc"; //문자형 " "
let c='abc' //문자형 ' '
let d=true; //논리형
let e=null; //e변수안에 값을 나중에 넣겠다는 의미
let f=undefined; //변수 안에 값을 정의하지 않겠다. 변수만 만들어 놓고 값을 넣지 않은 상태.
let h; //변수 안에 값을 정의하지 않겠다. 변수만 만들어 놓고 값을 넣지 않은 상태.

console.log(a + "입니다");
console.log( ` ${a} 입니다. `); //벡틱 사용
console.log( ` ${a} ${b} ${c} ${d} ${e} ${f} ${h} 입니다. `);

//405 1분 퀴즈
//화살표 함수 작성하기
const getArrayMaxNumber = (a)=> {
    let m = -999999;
    for (i=0; i<a.length; i++) {
        if (m < a[i]) m=a[i];
    }
    return m;
}

const max = getArrayMaxNumber([10,50,30]);
console.log(`${max}`); //50출력

//406 용어
//함수만들기
let aa=10;
const faa = () =>{
    let bb = 100;
    console.log(` ${aa+bb} `)
}
faa();//함수호출
console.log( ` ${aa} ` );
// console.log( ` ${bb} ` );  ---> 오류 : bb는 함수 안에 있기때문에 지역스코프



var aaa=10;
{
    var bbb = 100;
    console.log(` ${aaa+bbb} `)
};
console.log( ` ${aaa} ` );
console.log( ` ${bbb} 나는` );


let aaaa=10;
{
    let bbbb = 100;
    console.log(` ${aaaa+bbbb} `)
};
console.log( ` ${aaaa} ` );
//console.log( ` ${bbbb} 나는` );


let aaaaa=10;
{
    let aaaaa = 100;
    console.log(` ${aaaaa} `)
};
console.log( ` ${aaaaa} ` );

// 호이스팅 - var
console.log(num);
var num = 20;
//let num = 20; ---> 오류 : let 은 호이스팅 자체가 성립되지 않는다.



printHello(); //함수 호출
function printHello() {
    console.log("Hello");
}//기본함수만 호이스팅된다.

var name = "aaa";
var name = 100;


//414p 1분 퀴즈
const result3 = (function(a,b){
    function  init(){
        return doSum(a,b);
    }
    function doSum(a,b){
        return a+b;
    }
    return init();
})(10,20);
console.log(result3);


const result4 = ( (a,b) => {
    return a+b;
})(10, 20);
console.log(result4);
