// Arrow function ke sath => 
// const btn = document.getElementById("mybtn")
// btn.addEventListener("click",(e)=>{
// e.target.innerText =" yes u are click this button"
// e.target.style.backgroundColor = "yellow"
// })

// Without arrow function => 

const btn = document.getElementById("mybtn")
btn.addEventListener("click", function(){
    this.innerText = "hello world"
    console.log()
})



