const headerTrigger = document.querySelector('.header__trigger')
const headerList = document.querySelector('.header__list')

if (headerTrigger) {
  headerTrigger.addEventListener('click', () => {
    headerTrigger.classList.toggle('is-open')
    headerList.classList.toggle('is-open')
  })
}

const body = document.querySelector('body')
const contrastTrigger = document.querySelector('.header__contrast-trigger')

if (contrastTrigger) {
  contrastTrigger.addEventListener('click', () => {
    body.classList.toggle('extra-contrast')
  })
}

// const headerItems = document.querySelectorAll('a[href*="#"]')
// if (headerItems) {
//   headerItems.forEach((item) => {
//     item.addEventListener('mouseenter', () => {
//       console.log(item);
//       item.classList.add('hover')
//     })
//     item.addEventListener('mouseleave', () => {
//       item.classList.remove('hover')
//     })
//   })
// }




const form = document.querySelector('.form')
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`)
    }
  })
}

const allLinks = [...document.querySelectorAll('a')]

const cursor = document.querySelector('.cursor')
if (cursor) {
  window.addEventListener('mousemove', (event) => {
    // console.log(event)
    cursor.style.transform = 'translateX(' + (event.clientX - 8) + 'px) translateY('+ (event.clientY - 8) + 'px)'
    if (allLinks) {
      const filtered = allLinks.filter(link => link == event.target)
      if (filtered.length) {
        const linkie = filtered[0].getAttribute('href')
        if (linkie == '/') {
          cursor.innerText = 'homeee'
        } else {
          cursor.innerText = linkie
        }
      } else {
        cursor.innerText = ''
      }
    }
  })
}

gsap.to(".text", {
  scrollTrigger: {
    trigger: ".text",
    scrub: 1,
    start: 'top-=200',
    end: 'bottom-=500',
    // markers: true,
  }, 
  x: 100
});

gsap.to(".scroll-title h2", {
  scrollTrigger: {
    trigger: ".scroll-title",
    scrub: 1,
    start: 'top-=500',
    end: 'bottom-=300',
    markers: true,
  }, 
  '--x': 1
});


// SWIPERRRR

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 500,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  parallax: true,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    756: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});