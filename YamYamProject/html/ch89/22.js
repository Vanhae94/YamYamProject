const selectF = () => {
    const t = document.getElementById("title");
    alert(t.innerText);
    const te = document.getElementsByClassName("text");
    for(let i=0; i<te.length; i++){
        alert(te[i].innerText);
    }
    const a = document.getElementsByTagName("a");
    alert(a[0].innerText)
    const t1 = document.querySelector("#title");
    const te1 = document.querySelector(".text");
    const te2 = document.querySelectorAll(".text");
    alert(` ${t1.innerText} - ${te1.innerText} - ${te2.length} ` );
    const all = document.querySelectorAll("#title .text"); //title~text 다 선택하고 싶을 때
    for(let i=0;i<all.length;i++){
        alert(all[i].innerText);
    }
};