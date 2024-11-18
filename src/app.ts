let lastScrollY = 0
const navbar = document.querySelector('header')!

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navbar.classList.add('hidden')
  } else {
    navbar.classList.remove('hidden')
  }

  lastScrollY = currentScrollY
})
