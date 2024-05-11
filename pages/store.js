let a = document.getElementById('header-dark');
let b = document.getElementsByClassName('header-text')
let c = document.getElementsByClassName('nav-bar')
let img = document.getElementById('img');

window.addEventListener('scroll' , (Event)=>{
    if(scrollY === 0){
        a.classList.add('dark');
        a.classList.remove('light');
        img.src='./images cad/logo.png';
        for(i=0; i<b.length; i++){
            b[i].classList.add('fill-light');
            b[i].classList.remove('fill-dark');
        }
        c[0].classList.add('');
        c[0].classList.remove('');
    }else if(scrollY > 0){
        a.classList.add('light');
        a.classList.remove('dark')
        img.src='./images cad/logo-color.png';
        for(i=0; i<b.length; i++){
            b[i].classList.add('fill-dark');
            b[i].classList.remove('fill-light');
        }
        c[0].classList.add('');
        c[0].classList.remove('');
    }
})


let navBar = document.getElementsByClassName('nav-bar-content')[0];

function toggleNavBar(){
    if(navBar.classList.contains('db')){
        navBar.classList.add('dn');
        navBar.classList.remove('db');
    }else{
        navBar.classList.add('db');
        navBar.classList.remove('dn');
    }
}