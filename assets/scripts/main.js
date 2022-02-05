let triggerMenuCounter = 0
const navMenu = document.querySelectorAll('.nav-menu').forEach(navMenu => {
    navMenu.addEventListener('click', (event) => {
        triggerMenuCounter % 2 === 0
            ? event.target.closest('body').classList.add('nav-menu-clicked')
            : event.target.closest('body').classList.remove('nav-menu-clicked')
        triggerMenuCounter++
    })
})