const grandParent = document.getElementById("grandParent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")


function showImage(){
   const container =  document.getElementById("grandParent")
   const container1 =  document.getElementById("parent")
   const container2 =  document.getElementById("child")
   container.classList.add("image");
   container1.classList.add("image1");
   container2.classList.add("image2");
}

grandParent.addEventListener(
    "click",
    (e) => {
        showImage()
        console.log("grandparent")
        e.stopPropagation()
    },
    { capture: false }
)

parent.addEventListener(
    "click",
    (e) => {
        console.log("parent")
        showImage("parent")
        e.stopPropagation()
    },
    { capture: false }
)
child.addEventListener(
    "click",
    (e) => {
        console.log("Child")
        showImage("child")
        e.stopPropagation()
    },
    { capture: false }
)
