const juminOk = false;

const checks = () => {
  const getId = document.getElementById("id");
  const getPw = document.getElementById("password");
  const getPwCheck = document.getElementById("password_check");
  const getMail = document.getElementById("mail");
  const getName = document.getElementById("name");
  const getHobby = document.getElementsByName("hobby");
  const getNum = document.getElementById("id_num");
  const getNumBack = document.getElementById("id_num_back");
  const getIntro = document.getElementById("intro");
  const id = getId.value;
  const pw = getPw.value;
  const pwCheck = getPwCheck.value;
  const mail = getMail.value;
  const name = getName.value;
  const idNum = getNum.value;
  const idNumBack = getNumBack.value;
  const regExp = /^[a-zA-Z0-9*]{4,12}$/;
  const regName = /^[가-힝]{2,}$/;
  const regMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!regExp.test(id)) {
    //id
    alert("아이디 다시 설정");

    getId.value = "";

    getId.focus();

    return false;
  } else if (!regExp.test(pw)) {
    //password

    alert("비밀번호 다시 설정");

    getPw.value = "";

    getPw.focus();

    return false;
  } else if (!(pwCheck.slice(0, pwCheck.length) == pw.slice(0, pw.length))) {
    //password 동일한지 확인

    alert("비밀번호 서로 안맞아");

    getPwCheck.value = "";

    getPwCheck.focus();

    return false;
  } else if (pw.slice(0, pwCheck.length) == id.slice(0, id.length)) {
    //password랑 id 다른지 확인

    alert("비밀번호와 id가 동일하면 다매요!");

    getPw.value = "";

    getPwCheck.value = "";

    getPw.focus();

    return false;
  } else if (!regMail.test(mail)) {
    //메일주소 확인

    alert("이메일 형식 이상하노");

    getMail.value = "";

    getMail.focus();

    return false;
  } else if (!regName.test(name)) {
    //이름 확인

    alert("이름 다시");

    getName.value = "";

    getName.focus();

    return false;
  } else if (
    document.data.hobby[0].checked == false &&
    document.data.hobby[1].checked == false &&
    document.data.hobby[2].checked == false &&
    document.data.hobby[3].checked == false &&
    document.data.hobby[4].checked == false
  ) {
    //체크박스

    alert("박스 체크좀");

    return false;
  } else if (getIntro.value == "") {
    //자기소개

    alert("자기소개 적어주셈");

    return false;
  } else if (juminOk === "false") {
    alert("주민번호 확인을 누르세요");
    getName.value = "";

    getName.focus();
    return false;
  }
};

function check_jumin() {
  const idNumFront = document.getElementById("id_num").value;
  const idNumBack = document.getElementById("id_num_back").value;

  // 정규표현식으로 기본 형식 확인 (앞 6자리 + 뒤 7자리 숫자)
  const regExp = /^[0-9]{6}-?[0-9]{7}$/;
  const fullIdNum = `${idNumFront}-${idNumBack}`;

  if (!regExp.test(fullIdNum)) {
    alert("주민번호가 틀립니다");
    idNumFront.value = "";
    idNumBack.value = "";
    idNumFront.focus();
    return;
  } else {
    juminOk = "true";
  }

  // 주민등록번호 유효성 검사 (검증 공식 적용)
  const num = (idNumFront + idNumBack).split("").map(Number);
  const weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += num[i] * weight[i];
  }

  const checkDigit = (11 - (sum % 11)) % 10;

  if (checkDigit === num[12]) {
    document.getElementById("result").innerText = "유효한 주민등록번호입니다.";
  } else {
    document.getElementById("result").innerText =
      "유효하지 않은 주민등록번호입니다.";
  }
}
