//객체 CRUD
const student = {
  hakbun: "24",
  dept: ["컴공", "AI", "빅데이터"],
  phone: "010-9876-3214",
};

console.log(student.dept[1]);
console.log(student.phone);

//삽입하기
//점수 객체 score kor:100, eng:95
//선생님 이름 "정연희"
//나이객체 age:27
//함수 삽입 : 나이가 20살 이상이면 성인이군요, 잏면 미성년이군요 출력
student.score = { kor: 100, eng: 95 };
student.teacherName = "정연희";
student.age = 27;
console.log(student.score);
console.log(student.teacherName);
console.log(student.age);
student.judge = function () {
  if (this.age >= 20) console.log("성인이군요");
  else console.log("미성년이군요");
};
student.judge();
