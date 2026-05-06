const burger = document.querySelector(".header-burger");
const mobileNav = document.querySelector(".header-mobile-nav");
const close=document.querySelector(".close-menu");
const navlinks=document.querySelectorAll(".header-mobile-nav a");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
   document.body.style.overflow='hidden';
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
    mobileNav.classList.remove("active");
    document.body.style.overflow='';
    
  }
});

close.addEventListener("click",()=>{
mobileNav.classList.remove("active")
 document.body.style.overflow='';
});

navlinks.forEach(link => {
  link.addEventListener("click",()=>{
    mobileNav.classList.remove("active");
    document.body.style.overflow='';
 })
  
});