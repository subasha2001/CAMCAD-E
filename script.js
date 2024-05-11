
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

let slideR = document.getElementById('chris');
let slideL = document.getElementById('brian');
let caurosel1 = document.getElementsByClassName('caurosel1');
let caurosel2 = document.getElementsByClassName('caurosel2');

function slideRight(){
    slideR.classList.remove('active');
    slideL.classList.add('active');
    caurosel1[0].classList.add('selected');
    caurosel2[0].classList.remove('selected');
}
function slideLeft(){
        slideR.classList.add('active');
        slideL.classList.remove('active');
        caurosel1[0].classList.remove('selected');
        caurosel2[0].classList.add('selected');
}



let scrollUpBtn = document.getElementById('goUp');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        scrollUpBtn.classList.add('db');
    }else{
        scrollUpBtn.classList.add('dn');
        scrollUpBtn.classList.remove('db');
    }
}

function goToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let navBar = document.getElementsByClassName('nav-bar-content')[0];

function toggleNavBar(){
    if(navBar.classList.contains('h300')){
        navBar.classList.remove('h300')
        // navBar.classList.add('db')
    }else{
        navBar.classList.add('h300')
        // navBar.classList.remove('db')
    }
}


function popUp(){
    document.getElementsByClassName('popup')[0].classList.add('scale1');
}
function closepopUp(){
    document.getElementsByClassName('popup')[0].classList.remove('scale1');
}