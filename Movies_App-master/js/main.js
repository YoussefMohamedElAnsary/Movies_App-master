// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let mobileMenu = document.getElementById("mobile-menu");

menuIcon.onclick = () => {
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
  mobileMenu.classList.toggle("pointer-events-none");
  mobileMenu.classList.toggle("pointer-events-auto");
};

// Add shadow and bg on scroll
window.addEventListener('scroll', () => {
  const navbarLinks = document.querySelectorAll('.navbar a:not([href="#"])');
  const burgerIcon = document.querySelector('#menu-icon i');
  const logo = document.querySelector('.logo');
  const homeLink = document.querySelector('.home-active');
  
  if (window.scrollY > 50) {
    header.classList.add("bg-light", "shadow-lg");
    header.classList.remove("bg-transparent");
    
    navbarLinks.forEach(link => {
      link.classList.remove('text-main');
      link.classList.add('text-dark');
    });
    
    
    if (burgerIcon) {
      burgerIcon.classList.remove('text-light');
      burgerIcon.classList.add('text-dark');
    }
    
    if (logo) {
      logo.classList.remove('text-light');
      logo.classList.add('text-dark');
    }
    
    if (homeLink) {
      homeLink.classList.remove('text-main');
      homeLink.classList.add('text-dark');
    }
  } else {
    header.classList.remove("bg-light", "shadow-lg");
    header.classList.add("bg-transparent");
    
    navbarLinks.forEach(link => {
      link.classList.remove('text-dark');
      link.classList.add('text-main');
    });
    
    if (burgerIcon) {
      burgerIcon.classList.remove('text-dark');
      burgerIcon.classList.add('text-light');
    }
    
    if (logo) {
      logo.classList.remove('text-dark');
      logo.classList.add('text-light');
    }
    
    if (homeLink) {
      homeLink.classList.remove('text-dark');
      homeLink.classList.add('text-main');
    }
  }
  
  mobileMenu.classList.add("scale-y-0", "pointer-events-none");
  mobileMenu.classList.remove("scale-y-100", "pointer-events-auto");
});

