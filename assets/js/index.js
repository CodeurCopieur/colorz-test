const iconeClose = document.querySelector('.popup__close');
const toggleShow = document.querySelector('.popup__close input[type="checkbox"]');
const currentTheme = localStorage.getItem('showPopup') ? localStorage.getItem('showPopup') : null;

window.addEventListener('DOMContentLoaded', () => {
  this.disabledScroll(true);
  this.sectionOneScrollAnimations();
  this.sectionTwoScrollAnimations();
  this.sectionThreeScrollAnimations();

  this.initAnimations();

  window.addEventListener('scroll', scrollHeader);


  toggleShow.addEventListener('click', (e) => {
    e.target.checked = true;

    if(e.target.checked && localStorage.getItem('showPopup')) {
      gsap.to( "#popup", {autoAlpha:0})

      document.documentElement.setAttribute('data-popup', 'true');
    }
    
  })
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

/* ANIMATION SCROLL */

function disabledScroll( disabled ){
  if(disabled) {
    this.document.querySelector('body').style.overflowY = "hidden";
  } else {
    this.document.querySelector('body').style.overflowY = "auto";


      if(!localStorage.getItem('showPopup')){
        gsap.from( "#choose", {
          scrollTrigger: {
            trigger: "#choose",
            scrub: true,
            markers: true,
            start: 'top center',
            onEnter: () => {
              showPopup();
              localStorage.setItem('showPopup', true); //add this
            }
          }
        });
      } else {
        gsap.to( "#popup", {autoAlpha:0})
      }
  }
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
      start: 'top-=200 center'
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
      start: 'top-=100 center'
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
      start: 'top-=100 center'
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

function showPopup() {
  const tl = gsap.timeline();

  tl
  .to('#popup', {
    autoAlpha: 1
  })
}

function sectionThreeScrollAnimations() {
  const tl = gsap.timeline();

  tl
  .from("#productsSwiper", {
    scrollTrigger:  {
      trigger: "#productsTitle",
      scrub: true,
      start: 'top-=200 center'
    },
    duration: .5,
    opacity: 0
  })
}

/*=============== TESTIMONIALS SWIPER ===============*/
let homeSwiper = new Swiper(".testimonials-swiper, .slider-image__swipper", {
  loop: 'true',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*===============  CHOOSE ===============*/
let chooseSwiper = new Swiper(".choose-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: 'true',
  spaceBetween: 16
});


/*===============  SWIPER PRODUCT ===============*/
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  spaceBetween: 16
});
