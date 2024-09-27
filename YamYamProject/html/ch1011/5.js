// 객체 CRUD
const student= {
    hakbun: "24",
    dept: ["컴공", "AI", "빅데이터"],
    phone: "010-9876-3214",
};
//AI 출력하기
console.log(student.dept[1]);
//전화번호 출력하기
console.log(student.phone);
//삽입하기
//문) 점수 score 객체 삽입하기 kor100 eng95
//문) 선생님 이름 삽입하기
//문) 나이객체 삽입하기 age:27
//문) 함수 삽입하기
//위에 나이를 가지고 20살이상이면 성인이군요. 이하면 미성년이군요. 출력하는 함수

student.score = { kor:100, eng:95};
student.teacherName="정현희";
student.age=27;
student.ageF() = function() {
    if (this.age >= 20)  console.log("성인이군요.");
    else console.log("미성년이군요.")
};
student.ageF();


