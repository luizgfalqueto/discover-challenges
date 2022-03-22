const li_menus = document.querySelectorAll('.li_menu')
li_menus[0].classList.add('selected')


const button_menu = document.getElementById('menu_button')

button_menu.addEventListener('click', () => {
    document.querySelector('div.aside').classList.toggle('active')
    button_menu.classList.toggle('close')

    if (button_menu.classList.contains('close')) {
        button_menu.src = './assets/menu-buguer-close.svg'
    }else {
        button_menu.src = './assets/menu-buguer-open.svg'
    }
})
