const pw = "1234";
console.log(pw.length);
const n = "abcdefabcdef";
console.log(n.includes("f"));
// a를 o 로 변경하기
const n1 = n.replaceAll("a","o");
console.log(n1);
// f를 기준으로 자르기
const n2 = n1.split("f");
// 모두 대문자로 출력
console.log(n2.toUpperCase());