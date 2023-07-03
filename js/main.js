$(document).ready(function () {
    $('.about__slider').slick({  
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        nextArrow: '<button class="slick-btn"><img class="slick-next" src="img/ikon/slick-next.svg" alt="slick-next"></button>',
        prevArrow: '<button class="slick-btn"><img class="slick-prev" src="img/ikon/slick-next.svg" alt="slick-prev"></button>'
      });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
});