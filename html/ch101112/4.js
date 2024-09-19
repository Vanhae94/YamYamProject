//11장 객체
//객체 만들기 _ CRUD
//객체 삽입 Create
//객체 검색 Read
//객체 수정 Update
//객체 삭제 Delete

//객체 만들기 키 = 값
//this. : 객체 안에서 다른 객체에 키를 가져올때 사용
const person = {
  name: "Hong Gil Dong",
  age: 20,
  sex: "male",
  score: { kor: 100, eng: 50, math: 90 },
  sumF: function sumF() {
    return this.score.kor + this.score.eng + this.score.math;
  },
  etc: null,
  printName: function printName() {
    console.log(this.name);
  },
};
//객체 삽입하기 객체명.키 = 값
person.hakbun = "241205";
person.schoolName = "서울대";

//검색하기 출력 객체명.키명
console.log(person.name);
console.log(person.score.eng);
console.log(person.sumF());
person.printName();

//객체 수정하기
person.age = 30;
person.score.kor = 98;
console.log(person.age);
console.log(person.score.kor);

//객체 삭제하기
console.log(person.etc);
delete person.etc;
console.log(person.etc);
console.log(person.score.eng);
delete person.score.eng;
console.log(person.score.eng);
