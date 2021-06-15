const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const darkModeToggle = document.querySelector('#dark-mode-toggle')
const colorToggle = document.querySelector('#color-toggle')
const colors = document.querySelectorAll('.color-nav__item')
let darkMode = localStorage.getItem('darkMode')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})

colorToggle.addEventListener('click', () => {
    document.body.classList.toggle('color-nav-open')
})

let i;
for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changeColor)
}

function changeColor() {
    let color = this.getAttribute('data-color')
    document.documentElement.style.setProperty('--clr-accent', color)
    document.body.classList.remove('color-nav-open')
}