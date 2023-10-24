let openHamburguer = document.getElementById('open-nav-hamburguer');
let closeHamburguer = document.getElementById('close-nav-hamburguer');

let navBar = document.getElementById('nav-bar');


openHamburguer.addEventListener('click', ()=>{
    navBar.classList.add('open');
});

closeHamburguer.addEventListener('click', ()=>{
    navBar.classList.remove('open');
});