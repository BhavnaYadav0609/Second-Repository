// const a = document.forms["myForm"]["first-input"].value
// const b = document.forms["myForm"]["second-input"].value
// function MyFormChanges(){
//     // console.log(a)
//     // console.log(b)
//     // if(test=="" || typeof String){
//     //     console.log("you r input filed is empty")
//     // }
//     // else{
//     //     console.log("your form is submitted")
//     // }

//     if(isNaN(test)){
//         alert("you r input filed is empty")
//         return false;
//     }
//     else{
//         alert("your form is submitted")
//     }
// }


// function func1(){
    
//     console.log("firstcall");
//     func2();
// }
// func1();
// function func2(){
    
//     console.log("Second call");
//     func3();
// }
// function func3(){
//     console.log("third");
//     func4();
// }
// function func4(){
//     console.log("fourth");
//     console.trace(); 
// }


console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 1000);

console.log("End");
