const hamburger = document.querySelector('.hamburger')
const navItems = document.querySelector('.nav-items')
const actionContainer = document.querySelector('.action-container')
const overlay = document.querySelector('.overlay')
const header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navItems.classList.toggle('active')
    actionContainer.classList.toggle('active')
    overlay.classList.toggle('active')
    header.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navItems.classList.remove('active')
    actionContainer.classList.remove('active')
    overlay.classList.remove('active')
    header.classList.remove('active')
})