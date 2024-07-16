// Navigation Section
const navicon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav-menu');
const navitem = document.getElementsByClassName('nav-items');
let toggleicon = true;
navicon.addEventListener('click',()=>{
    if(toggleicon == true){
        document.querySelector('.nav-box .nav-icon i').setAttribute('class','fa fa-close');
        toggleicon = false;
    }
    else{
        document.querySelector('.nav-box .nav-icon i').setAttribute('class','fa fa-navicon');
        toggleicon = true;
    }
});
Array.from(navitem).forEach(e=>{
    e.addEventListener('click',()=>{
        nav.classList.toggle('toggle-menu');
    });
});
navicon.addEventListener('click',()=>{
    nav.classList.toggle('toggle-menu');
});

// Home section
const bgcontrol = document.querySelector('html:root');
let bgcolorcheck = true;
// console.log(bgcontrol);
document.querySelector('.home-content').setAttribute('style','animation: home-content 1.5s ease-in-out 0s;');
document.querySelector('.home-img').setAttribute('style','animation: home-image 1.5s ease-in-out 0s;');
document.querySelector('.dark-mode .click-action').addEventListener('click',()=>{
    document.querySelector('.click-action').classList.toggle('dark-toggle');
    document.querySelector('.dark-mode').classList.toggle('dark-color');
    if(bgcolorcheck == true){
        bgcontrol.setAttribute('style','--text-color:#000;--bg-color:#fff;');
        bgcolorcheck = false;
        // console.log(bgcolorcheck);
    }
    else{
        bgcontrol.setAttribute('style','--text-color:#fff;--bg-color:#000;');
        bgcolorcheck = true;
        // console.log(bgcolorcheck);
    }
    
});