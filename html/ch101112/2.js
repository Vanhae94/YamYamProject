//최대값 출력
//방법1 가장 큰 값
function max1(a, b) {
  if (a > b) return a;
  else return b;
}
let result = max1(20, 80);
console.log(result);

//방법2 가장 작은 값
const min1 = function (a, b, c) {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
};
result = min1(20, 80, 40);
console.log(result);

//방법3 합계
const sum1 = (a, b, c) => {
  return a + b + c;
};
result = sum1(20, 80, 40);
console.log(result);
