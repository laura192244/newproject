const burger = document.querySelector(".header-burger");
const mobileNav = document.querySelector(".header-mobile-nav");
const close=document.querySelector(".close-menu");
const navlinks=document.querySelectorAll(".header-mobile-nav a");
document.querySelector(".header-btn").addEventListener('click', openModal);;
document.querySelector('#close-menu').addEventListener('click', closeModal);;
document.querySelector('#overlay').addEventListener('click', closeModal);
document.querySelector('#send-btn').addEventListener('click', sendMsg);

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
   document.body.style.overflow='hidden';
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
    mobileNav.classList.remove("active");
    if (document.querySelector('#modal').style.display !== 'block') {
      document.body.style.overflow = '';
    }
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
function openModal(){
document.querySelector('#overlay').style.display='flex';
  document.querySelector('#modal').style.display='block';
  document.querySelector('#success-msg').style.display='none';
  document.querySelector('#f-name').value = '';
  document.querySelector('#f-email').value = '';
  document.querySelector('#f-msg').value = '';
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.querySelector('#overlay').style.display='none';
  document.querySelector('#modal').style.display='none';
}
function sendMsg() {
  const name = document.querySelector('#f-name').value.trim();
  const email = document.querySelector('#f-email').value.trim();
  const msg = document.querySelector('#f-msg').value.trim();

  if (!name || !email || !msg) {
    alert('fill the all fillds');
    return;
  }

  document.querySelector('#success-msg').style.display = 'block';
  setTimeout(closeModal, 1800);
}