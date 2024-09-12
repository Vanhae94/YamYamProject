// 436p
const arr = [10,20,30];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

const arr1 = [10,20,30,40,9,88,-20,-3];
arr1.push(50);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.sort();
console.log(arr1 + "@@sort");

const arr4 = [10,20,30,40,-9,-78];
const arr4Re = arr4.filter((v) => v >= 0 ? v : 0);
arr4Re.forEach((v) => console.log(v+"!!!"));
const arr4MapResult = arr4.map((v,i)=>(i%2 ==0) ? "짝수인덱스" : "홀수인덱스");
arr4MapResult.forEach((v)=> console.log(v+"@@@"));

const date1 = new Date("2020-12-23");
const date2 = new Date("2020-12-25");
const dateDiff = date2.getDate() - date1.getDate();
const interval = dateDiff / (24*60*60*1000);
console.log(interval);

