//구구단
//방법1 함수 선언문 사용 function(){};
function a() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + "X" + j + "=" + i * j);
    }
  }
}
a();

//방법2 표현식 함수 정의 const 변수명 = function [식별자](){};
const b = function a() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + "X" + j + "=" + i * j);
    }
  }
};
b();

//방법3 화살표 함수
const c = () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + "X" + j + "=" + i * j);
    }
  }
};
c();
