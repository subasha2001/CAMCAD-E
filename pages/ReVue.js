let con13DD = document.getElementsByClassName('con13DropDown');
let con13LD = document.getElementsByClassName('livedemo')
let con13PT = document.getElementsByClassName('producttour')
function con13DropDown1(){
    con13DD[0].classList.add('selected');
    con13DD[1].classList.remove('selected');
    con13LD[0].classList.remove('dn');
    con13PT[0].classList.add('dn');
}
function con13DropDown2(){
    con13DD[1].classList.add('selected');
    con13DD[0].classList.remove('selected');
    con13PT[0].classList.remove('dn');
    con13LD[0].classList.add('dn');
}

let scrollUpBtn = document.getElementById('goUp');

window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    scrollUpBtn.classList.add('db');
}else{
    scrollUpBtn.classList.add('dn');
    scrollUpBtn.classList.remove('db');
}
}

function scrollFunction(){
    
}

function goToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function popUp(){
    document.getElementsByClassName('popup')[0].classList.add('scale1');
}
function closepopUp(){
    document.getElementsByClassName('popup')[0].classList.remove('scale1');
}