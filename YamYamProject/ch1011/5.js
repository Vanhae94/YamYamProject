// 객체 CRUD
const student = {
    hakbun : "24",
    dept : ["컴공","AI","빅데이터"],
    phone : "010-2597-9427",

}

// AI 출력
console.log(student.dept["부전공"]);
console.log(student.phone);

// 삽입하기
// 점수 score 객체 삽입하기 kor 100 eng 95
student.score = {kor:100, eng:95};
// 선생님 이름 삽입하기 
student.teacherName = "정현희";
console.log(student);
student.age = 27;
student.fx = function () {
    if(this.age >= 20)console.log("성인이군요");
    else console.log("미성년자군요");
};
console.log(student.fx());


