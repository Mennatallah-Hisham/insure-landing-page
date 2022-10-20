
console.log("hello");


const navBtn =document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const htmlEl =document.querySelector("html");

navBtn.addEventListener("click",()=>{
    headerEl.classList.toggle("nav-open");
    htmlEl.classList.toggle("hide-overflowY");
})