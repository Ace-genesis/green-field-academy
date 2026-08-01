const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const hamMenu = document.querySelector('.hamburger-menu')
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    hamMenu.classList.toggle('active')
    overlay.classList.toggle('active')
    body.classList.toggle('active')

})

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active')
    hamMenu.classList.remove('active')
    overlay.classList.remove('active')
    body.classList.remove('active')
})