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
if (document.querySelector('.text')) {
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
}

if (document.querySelector('.scroll-title')) {
  gsap.to(".scroll-title h2", {
    scrollTrigger: {
      trigger: ".scroll-title",
      scrub: 1,
      start: 'top-=500',
      end: 'bottom-=300',
      // markers: true,
    }, 
    '--x': 1
  });
}

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


const textAnimationElements = document.querySelectorAll('.text-animation *')

if (textAnimationElements.length) {
  window.addEventListener('mousemove', (event) => {
    const xPercentage = (event.clientX / window.innerWidth) - 0.5
    const yPercentage = (event.clientY / window.innerHeight) - 0.5
    gsap.to(textAnimationElements, {
      x: xPercentage * 150,
      y: yPercentage * 150,
      stagger: {
        each: 0.03,
        from: 'center',
      },
      ease: 'power2.out'
    })

  })
}


const linkieLink = document.querySelector('.linkie__link')

const allNows = document.querySelectorAll('.linkie__fake-text')

if (allNows.length) {
  linkieLink.addEventListener('mouseenter', () => {
    allNows.forEach((now, index) => {
      let y = 'random(-120, -160)%';
      if (index > 2) {
        y = 'random(120, 160)%';
      }

      gsap.to(now, {
        x: 'random(-100, 100)%',
        y: y,
        delay: index * 0.04
      })
    })
  })
  linkieLink.addEventListener('mouseleave', () => {
    allNows.forEach((now, index) => {

      gsap.to(now, {
        x: 0,
        y: 0,
        delay: index * 0.04
      })
    })
  })
}



if (document.querySelector('.clip-container')) {
gsap.to(".clip-header", {
  scrollTrigger: {
    trigger: ".clip-header",
    scrub: 1,
    start: 'top',
    end: 'top+=200',
    // markers: true,
  }, 
  '--progress': 0
});

gsap.to(".clip-header__background-clip img", {
  scrollTrigger: {
    trigger: ".clip-header",
    scrub: 1,
    start: 'top',
    end: 'top+=200',
  }, 
  scale: 1.05
});

gsap.to(".clip-header__foreground-clip img", {
  scrollTrigger: {
    trigger: ".clip-header",
    scrub: 1,
    start: 'top',
    end: 'top+=200',
    // markers: true,
  }, 
  y: 0
});

  gsap.to(".clip-container", {
    scrollTrigger: {
      trigger: ".clip-container",
      scrub: 1,
      start: 'top',
      end: 'top+=500',
      // markers: true,
    }, 
    '--progress': 1
  });
}


gsap.to('.header-text-animation h1 span', {
  scrollTrigger: {
    trigger: ".header-text-animation",
    scrub: 2,
    start: 'top',
    end: 'top+=100',
  },
  '--y': -1,
  '--rotate': -1,
  stagger: 0.1
})

const textAnimationContainer = document.querySelector('.header-text-animation')
const grace = document.querySelector('.grace')

if (textAnimationContainer) {
  const mousePosition = {}
  let doAnimation = false
  textAnimationContainer.addEventListener('mouseenter', () => doAnimation = true)
  textAnimationContainer.addEventListener('mouseleave', () => doAnimation = false)
  
  textAnimationContainer.addEventListener('mousemove', (event) => {
    const xPercentage = (event.clientX / window.innerWidth) - 0.5
    const yPercentage = (event.clientY / window.innerHeight) - 0.5
    mousePosition.x = xPercentage
    mousePosition.y = yPercentage
    gsap.to(grace, {
      '--x': xPercentage,
      '--y': yPercentage
    })
  })

  const maxImages = 5;
  const images = []
  let lastPosition = {}
  setInterval(() => {
    if (doAnimation) {
      if (mousePosition.x == lastPosition.x) {
        lastPosition.x = mousePosition.x
      } else {
        lastPosition.x = mousePosition.x
        const newImage = grace.querySelector('img').cloneNode(true)
        grace.appendChild(newImage)
        gsap.fromTo(newImage, {
          '--x': mousePosition.x,
          '--y': mousePosition.y,
          opacity: 1,
          ease: 'power4.out'
        }, {
          '--y': mousePosition.y - 0.1,
          onComplete: () => {
            gsap.to(newImage, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                grace.removeChild(newImage)
              }
            })
          }
        })
        images.push(newImage)
      }
    }
  }, 200)
}
