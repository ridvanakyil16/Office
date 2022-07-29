const hamburger = document.querySelector('.navbar-mobile .fa-bars');
const mobile_menu = document.querySelector('.navbar-mobile .ul');
const hamburger2 = document.querySelector('.navbar-mobile .fa-shopping-basket');
const mobile_menu2 = document.querySelector('.navbar-mobile .ul2');
const hamburger3 = document.querySelector('.navbar-mobile .fa-user');
const mobile_menu3 = document.querySelector('.navbar-mobile .ul3');
const hamburger4 = document.querySelector('.navbar-mobile .fa-search');
const mobile_menu4 = document.querySelector('.navbar-mobile .ul4');


const chavreon1 = document.querySelector('.navbar-mobile .list .chv-1');
const mobile_menu_alt1 = document.querySelector('.navbar-mobile .ul-ul1');





hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

hamburger2.addEventListener('click', () => {
    hamburger2.classList.toggle('active');
    mobile_menu2.classList.toggle('active');
});

hamburger3.addEventListener('click', () => {
    hamburger3.classList.toggle('active');
    mobile_menu3.classList.toggle('active');
});
hamburger4.addEventListener('click', () => {
    hamburger4.classList.toggle("active")
    mobile_menu4.classList.toggle("active")
});

chavreon1.addEventListener('click', () => {
    chavreon1.classList.toggle("active")
    mobile_menu_alt1.classList.toggle("active")
});