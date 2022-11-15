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

const cursor = document.querySelector('.cursor')
if (cursor) {
  window.addEventListener('mousemove', (event) => {
    // console.log(event)
    cursor.style.transform = 'translateX(' + (event.clientX - 8) + 'px) translateY('+ (event.clientY - 8) + 'px)'
    // cursor.style.transform.translateY = event.clientY + 'px'
  })
}


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