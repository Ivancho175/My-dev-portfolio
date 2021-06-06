const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const darkModeToggle = document.querySelector('#dark-mode-toggle')
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
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})