function printInfo() {
  console.log(`웹브라우저의 너비 : ${window.innerWidth}`);
  console.log(`웹브라우저의 높이 : ${window.innerHeight}`);
  console.log(`웹브라우저의 창의 너비 : ${window.outerWidth}`);
  console.log(`웹브라우저의 창의 높이 : ${window.outerHeight}`);
  console.log(
    `웹브라우저의 창의 위쪽 면과 모니터 사이의 간격 : ${window.screenTop}/${window.screenY}`
  );
  console.log(
    `웹브라우저의 창의 왼쪽 면과 모니터 사이의 간격 : ${window.screenLeft}/${window.screenX}`
  );
  console.log(`웹브라우저의 창의 스크롤 가로 위치 : ${window.scrollX}`);
  console.log(`웹브라우저의 창의 스크롤 세로 위치 : ${window.scrollY}`);
}
const popup = () => {
  window.open(
    "popup.html",
    "팝업",
    "width=500, height=500, left=400, right=400" //팝업위치
  );
};
// const scrollMove = () => {
//   window.scrollTo(100, 200);
// };
const scrollMove = () => {
  window.scrollBy({ left: -100, right: -200, top: -200, behavior: "smooth" });
};
