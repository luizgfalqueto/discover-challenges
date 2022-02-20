const input_user = document.querySelector('#input_user')
const input_password = document.querySelector('#input_password')
const pai_input_user = input_user.parentNode
const pai_input_password = input_password.parentNode

input_user.addEventListener('focus', () => {
    pai_input_user.classList.toggle('active')
    pai_input_user.querySelector('#email_icon').src = "./images/mail-focus.svg"
})

input_user.addEventListener('blur', () => {
    pai_input_user.classList.toggle('active')
    pai_input_user.querySelector('#email_icon').src = "./images/mail.svg"
})

input_password.addEventListener('focus', () => {
    pai_input_password.classList.toggle('active')
    pai_input_password.querySelector('#lock_icon').src = "./images/lock-focus.svg"
})

input_password.addEventListener('blur', () => {
    pai_input_password.classList.toggle('active')
    pai_input_password.querySelector('#lock_icon').src = "./images/lock.svg"
})

const eye_icon = document.querySelector('#eye')
eye_icon.addEventListener('click', () => {
    const type = document.querySelector('#input_password').getAttribute('type')
    if(type==='password'){
        document.querySelector('#input_password').setAttribute('type','text')
    }else{
        document.querySelector('#input_password').setAttribute('type','password')
    }
})