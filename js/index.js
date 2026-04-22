const burger = document.querySelector(".header-burger");
const mobileNav = document.querySelector(".header-mobile-nav");
const close=document.querySelector(".close-menu");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
    mobileNav.classList.remove("active");
  }
});

close.addEventListener("click",()=>{
mobileNav.classList.remove("active")
});