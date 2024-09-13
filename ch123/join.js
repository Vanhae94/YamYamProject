const checks = () =>{
    const getId = document.getElementById("id");
    const getPw = document.getElementById("password");
    const getPwCheck = document.getElementById("password_check");
    const getMail = document.getElementById("mail");
    const getName = document.getElementById("name");
    const getHobby = document.getElementsByName("hobby");
    const getNum = document.getElementById("id_num");
    const getNumBack = document.getElementById("id_num_back");
    const getIntro = document.getElementById("intro");
    //value 불러오기
    const id = getId.value;
    const pw = getPw.value;
    const pwCheck = getPwCheck.value;
    const mail = getMail.value;
    const name = getName.value;
    const idNum = getNum.value;
    const idNumBack = getNumBack.value;
    //유효성 검사
    const regExp = /^[a-zA-Z0-9]{4,12}$/; //id, password
    const regName = /^[가-힝]{2,}$/; //name
    const regMail = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i; //mail

    if(!regExp.test(id)) { //id
        alert("아이디 다시 설정");
        getId.value ="";
        getId.focus();
        return false;
    } else if(!regExp.test(pw)) { //password
        alert("비밀번호 다시 설정");
        getPw.value="";
        getPw.focus();
        return false;
    } else if(!(pwCheck.slice(0, pwCheck.length) == pw.slice(0, pw.length))) { //password 동일한지 확인
        alert("비밀번호 서로 안맞아");
        getPwCheck.value="";
        getPwCheck.focus();
        return false;
    } else if((pw.slice(0, pwCheck.length) == id.slice(0, id.length))) { //password랑 id 다른지 확인
        alert("비밀번호와 id가 동일하면 다매요!");
        getPw.value="";
        getPwCheck.value="";
        getPw.focus();
        return false;
    } else if(!regMail.test(mail)){ //메일주소 확인
        alert("이메일 형식 이상하노");
        getMail.value="";
        getMail.focus();
        return false;
    } else if(!regName.test(name)) { //이름 확인
        alert("이름 다시");
        getName.value="";
        getName.focus();
        return false;
    } else if(document.data.hobby[0].checked==false && 
                document.data.hobby[1].checked==false && 
                document.data.hobby[2].checked==false && 
                document.data.hobby[3].checked==false && 
                document.data.hobby[4].checked==false){ //체크박스
        alert("박스 체크좀");
             return false;
    } else if(getIntro.value=="") { //자기소개
        alert("자기소개 적어주셈");
        return false;
    }
    //주민등록번호 유효성 검사

    function check_jumin() {

        var jumin = document.getElementById("id_num").value + document.getElementById("id_num_back").value;
        //pnum = 주민번호 앞자리
        //nnum = 주민번호 뒷자리
        var fmt = /^\d{6}[1234]\d{6}$/;   
        if (!fmt.test(jumin)) {
            alert("주민번호 틀렸따");
            return false;
        }
        var birthYear = (jumin.charAt(6) <= "2") ? "19" : "20";
        birthYear += jumin.substr(0, 2);
        var birthMonth = jumin.substr(2, 2) - 1;
        var birthDate = jumin.substr(4, 2);
        var birth = new Date(birthYear, birthMonth, birthDate);
​
        if (birth.getYear() % 100 != jumin.substr(0, 2) ||
                birth.getMonth() != birthMonth ||
                birth.getDate() != birthDate) {
​
            return false;
        }
};