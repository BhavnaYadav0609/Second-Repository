//  ek card create krna hai then initially card empty rhega then func call
//  hone pr card aayega or card pr click krne pr or cards add krtejana h 
let a = document.createElement("div");
 a.classList.add("divcls");
 
//  a.firstElementChild.classList.add("divcls");
 const div = document.getElementById("main-card");
 const btn = document.getElementById("btn");
  let count = 1;
     let para =`this is my ${count} para`;
      a.innerHTML=`<div><h1>${count} card</h1>   <p>${para}</p></div>`
    //   a.firstElementChild.classList.add("divcls");
 btn.addEventListener("click",()=>{
     div.innerHTML += a.innerHTML;
     count=count+1;
 });

//  if hum arrow fun ka use krte h to hum directly this method k use nhi kr skte  hai , if hum arrow func k use krna h to hum (e) k use krna pdega  ex. (e)=>{e.target.textContect}








// function mybtn(){
//     b.appendChild(a)
//     a.innerHTML.addEventListener("click",mybtn)
//     console.log("you are write a correct code")
// }


// a.innerHTML = "You are click this button"
// function mycard(){
//     console.log("yes u r write code")
// }

