//객체 만들기
//객체 삽입 Create
//객체 검색 Read
//객체 수정 Update
//객체 삭제 Delete

// 형식:  const 객체명 = {키:값,  키:값}
const person = {
    name: "Hong Gild Dong",
    age: 20,
    sex: true,
    score: { kor:100, eng:50, math:80},
    sumF: function sumF() {
        return this.score.kor + this.score.eng + this.score.math
    }, //this는 자기 자신 , 객체 안에서 다른 객체의 키를 가져올 때
    etc: null,
    printName : function printName(){
                 console.log(this.name);
    }
}; //객체 만들기 Create

//객체 삽입 / 형식: 객체명.키명=값
person.hakbun="241205";
person.schoolName="서울대";
//객체 검색
console.log(person.name);
console.log(person.score.eng);
console.log(person.sumF());
//객체 수정하기
 //나이 20살에서 30살로 고치기
person.age = 30;
 //국어점수 98점으로 고치기
person.score.kor = 98;
//객체 삭제하기
 //etc 키를 삭제하기
console.log(person.etc + "~");
delete person.etc;
console.log(person.etc + "~~");
 //영어점수 삭제하기
delete person.score.eng;
console.log(person.score.eng);