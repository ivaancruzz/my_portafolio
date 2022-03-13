export const openMenu = () =>{
    const button_menu = document.querySelector('#toggle-menu')
    const menu = document.querySelector('nav')
    const accordion = document.querySelector('.accordion')

    let menu_active = false

    button_menu.addEventListener('click', () => {   

        menu_active = !menu_active
        accordion.classList.toggle('invisible')
        menu.classList.toggle('collapsed')
        
    })

    /* Close menu if click outside   */
    document.addEventListener('click', (e) => {
        if( e.target.closest('nav')) return

        if( menu_active ){
            menu.classList.toggle('collapsed')
            accordion.classList.toggle('invisible')

            menu_active = !menu_active
        }

    })
}


export const navLinkActive = () => {

    const sections = document.getElementsByName('section')
    const icons = document.getElementsByName('link_icons')

    /* Activate link if reload page */
    const hash = location.hash.replace('#', '')
    if( hash == '' ) icons[0].classList.add('active') //if hash is null, active link home
    else{
        icons.forEach( (i) => { 
            if( i.classList.contains(hash) ) i.classList.add('active')

        })
    }
    
    /* Activate link if scrolling page */
    window.onscroll = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 500 ) {
                current = section.getAttribute("id"); }
            
        });
        
        icons.forEach((i) => {
            i.classList.remove("active");
            if (i.classList.contains(current)) {
                i.classList.add("active");
            }
        });
            
    };
    
    
}
