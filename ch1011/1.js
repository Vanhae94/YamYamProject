// 방법1
function a(){
    for(let i=2; i<10; i++){
        for(let j=1; j<10; j++){
            console.log(i + "X" + j + "=" + i*j);
        }
    }
}
// a();
// a();

// 방법2 함수표현식
const b = function (){
    for(let i=2; i<10; i++){
        for(let j=1; j<10; j++){
            console.log(i + "X" + j + "=" + i*j);
        }
    }
}
console.log(b()+" @");

// 방법 3 화살표함수
const c = () => {
    for(let i=2; i<10; i++){
        for(let j=1; j<10; j++){
            console.log(i + "X" + j + "=" + i*j);
        }
    }
}

// 최대값 출력하기
// 방법1
function max1(a, b) {
    if (a>b) return a;
    else return b;
}   
let result = max1(20,80);
console.log(result);

// 방법2
const min1 = function(a,b,c) {
    if(a<b && a<c) return a;
    else if(b<a && b<c) return b;
    else return c;
}
result = min1(20,80,40);
console.log(result);

// 방법3
const sum1 = (a,b,c) => {
    return a+b+c;
}
result = sum1(20,80,40);
console.log(result);