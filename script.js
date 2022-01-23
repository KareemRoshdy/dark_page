let btn = document.querySelector('.btn');
let bol = document.querySelector('.bol');
let sun = document.querySelector('.sun');
let nav = document.querySelector('nav');
let menu = document.querySelector('.fa-bars');

btn.onclick = () => {
    bol.classList.toggle('active');
    btn.classList.toggle('active');
    sun.classList.toggle('active');
    document.body.classList.toggle('active');   
}
menu.onclick = () => {
    nav.classList.toggle('active');
    menu.classList.toggle("fa-times");
}