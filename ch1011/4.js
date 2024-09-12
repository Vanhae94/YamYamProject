// 공부순서 crud 연습하기
// 객체만들기
// 객체삽입 create
// 객체 검색 read
// 객체 수정 update
// 객체 삭제 delete

// 형식 : const 객체명 = {키:값, 키:값};
const person = {
    name:"Hong gil dong",
    age:20,
    sex:true,
    score:null,
    score : {kor:100, eng:50, math:80},
    sumF : function sumF() {
        return this.score.kor + this.score.eng + this.score.math;
    },
    etc: null,
    printName : function printName(){
        console.log(this.name);
    }
 }; // 객체만들기

// 삽입하기 : 객체명.키명=값;
person.hakbun = "241205";
person.schoolName = "샤대";

// 검색하기
console.log(person.name);
console.log(person.score.eng);
console.log(person.sumF());
person.printName();

// 객체 수정하기
person.age = 30;
person.score.kor = 98;
// 객체 삭제하기
console.log(person.etc);
delete person.etc;
console.log(person.etc);

// 영어점수 삭제하기
console.log(person.score.eng);
delete person.score.eng;
console.log(person.score.eng);