window.addEventListener('DOMContentLoaded', () => {
  this.disabledScroll(true);
  //this.sectionOneScrollAnimations();
  //this.sectionTwoScrollAnimations();

  this.initAnimations();
});

function disabledScroll( disabled ){
  disabled ? this.document.querySelector('body').style.overflowY = "hidden" :
    this.document.querySelector('body').style.overflowY = "auto";
}

function initAnimations() {

  const tl = gsap.timeline();

  tl
  .from( "#coverWrapperMedia > *", {
    delay: .5,
    duration: .8,
    y: 90,
    opacity: 0,
    stagger: .15
  })

  .from( "#navLogo, #nav-menu > ul>li", {
  delay: .7,
  duration: .5,
  y: 70,
  autoAlpha: 0,
  stagger: .1
  })

  .from( "#coverWrapperTexts > *", {
    delay: .5,
    duration: .8,
    y: 90,
    opacity: 0,
    stagger: .15
  })


  .from( "#offreSpecial", {
    delay: .7,
    duration: .2,
    y: 70,
    opacity: 0,
    onComplete:() => this.disabledScroll(false)
  });
}





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
