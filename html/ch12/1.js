//id속성값
const selectId = () => {
  const t = document.getElementById("title");
  // alert(t.innerText);
  //class 속성값
  const t1 = document.getElementsByClassName("text");
  //alert(t1[1].innerHTML);
  const t2 = document.getElementsByTagName("h1");
  alert(t2[1].innerText);
};
