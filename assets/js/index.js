
/*=============== TESTIMONIALS SWIPER ===============*/
let homeSwiper = new Swiper(".testimonials-swiper, .slider-image__swipper", {

  loop: 'true',
  
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})


/*===============  SWIPER PRODUCT ===============*/
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  spaceBetween: 16,
});
