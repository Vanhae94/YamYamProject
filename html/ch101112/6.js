const pw = "1234";
console.log(pw.length);
const name = "abcdefabcdef";
console.log(name.includes("a")); //문자열 포함 여부
//a를 o로 변경
console.log(name.replaceAll("a", "o"));
console.log(name.replace("a", "o"));
//f기준으로 자르기
const nArr = name.split("f");
for (let i in nArr) {
  //인덱스 출력
  console.log(i);
}
const nArr1 = name.split("f");
for (let i in nArr1) {
  //인덱스 출력
  console.log(nArr1[i]);
}
const nArr2 = name.split("f");
for (let i in nArr2) {
  //인덱스 출력
  console.log(`${i} - ${nArr2[i]}`);
}
//모두 대문자 출력
const nU = name.toUpperCase();
console.log(nU);
const nn = name.toLocaleUpperCase(40);
console.log(nn);
//홀수번째 있는 문자만 출력
for (let i = 1; i < name.length; i += 2) {
  console.log(name[i]);
}
