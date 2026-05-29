// function handleClick()
// {
//   const element =  document.getElementById("first");
//   element.textContent="ketan is coming";
// }

const element =document.getElementById("first");
// element.onclick =function handleClick()
// {
//     element.innerText="please enter ketan kanoje";
// }

// element.onclick =function handleClick()
// {
//     element.innerText="please enter tanu";
// }

element.addEventListener("mouseleave",() =>{
    element.innerText="please enter tanu";
})


element.addEventListener("click",() =>{
    element.style.backgroundColor="pink";
})