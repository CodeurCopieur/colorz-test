window.addEventListener('DOMContentLoaded', () => {
  this.disabledScroll(true);
  this.sectionOneScrollAnimations();
  this.sectionTwoScrollAnimations();

  this.initAnimations();

  window.addEventListener('scroll', scrollHeader);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}


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
    stagger: .15,
    onComplete:() => this.disabledScroll(false)
  })
}

function sectionOneScrollAnimations() {

  const tl = gsap.timeline();

  tl
  .to( "#coverWrapperTexts > *", {
    scrollTrigger: {
      trigger: "#coverWrapperTexts",
      scrub: true,
      start: 'top top',
      end: "center 20%"
    },
    duration: .6,
    y: -40,
    opacity: .3,
    stagger: .15
  })
  .to( "#offreSpecial", {
    scrollTrigger: {
      trigger: "#cover",
      scrub: true,
      //    Trigger Scroller
      start: 'top+=100 top+=100',
      end: "center 20%"
    },
    y: 0,
    autoAlpha: 1
  })
  .to("#introContainer > *", {
    autoAlpha: 1,
    stagger: .2,
    delay: .2,
    scrollTrigger: {
      trigger: "#introContainer",
      start: 'top-=200'
    }
  })
}

function sectionTwoScrollAnimations() {
  const tl = gsap.timeline();

  tl
  .from( "#advancedWrap > *", {
    scrollTrigger: {
      trigger: "#intro__link",
      scrub: true,
      start: 'top+=100 center'
    },
    duration: .5,
    y: -40,
    opacity: 0,
    stagger: .15
  })
  .from( "#advanced__wrapper-media", {
    scrollTrigger: {
      trigger: "#intro__link",
      scrub: true,
      start: 'top+=100 center'
    },
    duration: .5,
    y: -40,
    opacity: 0
  })
  .from( "#situationWrap > *", {
    scrollTrigger: {
      trigger: "#situationSubtitle",
      scrub: true,
      start: 'top+=200 center'
    },
    duration: .5,
    y: -40,
    opacity: 0,
    stagger: .15
  })
  .from( "#situation__wrapper-media", {
    scrollTrigger: {
      trigger: "#situationSubtitle",
      scrub: true,
      start: 'top+=100 center'
    },
    duration: .5,
    y: -40,
    opacity: 0
  })



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
