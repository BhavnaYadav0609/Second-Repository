// 👉 key ko press krne pr code aayega or up/down key press krne pr code share krega 

// const pera = document.getElementById("sence")
// document.body.addEventListener('keydown',function(event){
//     console.log('key preesed: ', event.key)
//     console.log('key code: ', event.code)
//     para.innerText += event.key
// })

// 👉 form ka jo input type hota hai usme humko jo bhi usme input mein type kr rhe 
// hai usko check kre or sahi content rhta hai usko uppercase mein kr deta h
const pera = document.getElementById("test")
pera.addEventListener('keyup',function(event){
    pera.value = pera.value.toUpperCase()  
})