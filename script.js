
console.log("hello");


const navBtn =document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
navBtn.addEventListener("click",()=>{
    headerEl.classList.toggle("nav-open");
})