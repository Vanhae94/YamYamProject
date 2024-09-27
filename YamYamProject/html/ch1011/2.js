//최대값 출력하기
//방법1
function max1(a,b) {
    if (a >b) return a;
    else return b;
}
let result = max1(20, 80); // 80나오게
console.log(result);


 //20 나오게 방법 2로 함수 만들기
const min1 = function(a,b,c) {
    if(a<b && a<c) return a;
    else if(b<a && b<c) return b;
    else return c;
}

result = min1(20, 80, 40);
console.log(result);


//합계 나오게 방법3으로 함수 만들기
const sum1 = (a,b,c) => {
    return a+b+c;
}

result = sum1(20, 80, 40); 
console.log(result);
