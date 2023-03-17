const header = document.querySelector('header'),
      modal = document.getElementById('myModal'),
      closeModal = document.querySelector('.close'),
      contactBtn = document.querySelectorAll('a.btn'),
      navBar = document.querySelector('header i'),
      navMenu = document.querySelector('nav');


console.log(navMenu);

navBar.onclick = function() {
  navMenu.classList.toggle('active')
  navBar.classList.toggle('fa-close')
}

contactBtn.forEach((button) => {

  button.onclick = function(e){
    
    e.preventDefault();
    modal.style.display = "block";
  }
});

closeModal.onclick = () => {
  modal.style.display = "none";
}

// modal.onclick = function() {
//   modal.style.display = "none";
// }

//sticky header scroll
scrollTrigger = 50;

window.onscroll = function() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      header.classList.add('scroll')
  } else {
      header.classList.remove('scroll')
  }
}

//swiper feature init from swiper.js

var swiper = new Swiper(".testimony-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".program", {
    loop: true,
    spaceBetween: 30,
    // effect: "fade",
    cssMode: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

var swiper = new Swiper("#home", {
  loop: true,
  spaceBetween: 30,
  cssMode: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});