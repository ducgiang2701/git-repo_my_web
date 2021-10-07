const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', ()=> {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('close');
})

const nav_item = document.querySelector('.nav-item1');

nav_item.addEventListener('click', ()=> {
    nav_list.classList.remove('open');
    hamburger_icon.classList.remove('close');
})
const nav_item2 = document.querySelector('.nav-item2');

nav_item2.addEventListener('click', ()=> {
    nav_list.classList.remove('open');
    hamburger_icon.classList.remove('close');
})
const nav_item3 = document.querySelector('.nav-item3');

nav_item3.addEventListener('click', ()=> {
    nav_list.classList.remove('open');
    hamburger_icon.classList.remove('close');
})