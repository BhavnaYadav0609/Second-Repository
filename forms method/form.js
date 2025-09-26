// let x =document.forms["myform"]["fname"].value;
// let y =document.forms["myform"]["fage"].value;
// let y =document.forms[0]["fage"].value; for ex. inndexing lene ke liye


// function formValidation(){
//     if(x===" " || y ===" "){
//        alert("input fields cannot be empty .");
//        return false;
//     }
//     else{alert("form submitted");
//         return true;
//         } 
// }
// console.log(numb);
function formValidation() {
    let numb = document.forms["myform"]["numb"].value;
    console.log(typeof numb);
    console.log(123);
    if (isNaN(numb)) {
        alert("input fields cannot be non numner .");
        return false;
    }
    else {
        alert("form submitted");
        return true;
    }
}

