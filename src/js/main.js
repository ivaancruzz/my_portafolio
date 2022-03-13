import {navLinkActive, openMenu} from './menu.js'
const menu = document.querySelector('nav')
const main = document.querySelector('main')
const preloading = document.querySelector('.preloading')

window.onload = () => {
    menu.classList.add('visible')
    main.classList.remove('hidden')
    preloading.classList.add('hidden')
    AOS.init()
    openMenu()
    navLinkActive()

    
    
}





