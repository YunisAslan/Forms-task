const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#password2')

function showError (input,message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector('#small1') 
    console.log(small);
    small.innerHTML = message
    
}

showError(usernameEl, `<i class="fa-solid fa-circle-exclamation"></i> Adinizi duzgun daxil edin`)
// showError(passwordEl,`<i class="fa-solid fa-circle-exclamation"></i> Sifrenizi duzgun daxil edin`)

function showSuccess(input,bildiris) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    const small = formControl.querySelector('#small2')
    console.log(small);
    small.innerHTML = bildiris
}

showSuccess(confirmPasswordEl,`<i class="fa-solid fa-circle-check"></i> Sifrenizi duzgun dogrulayirsiz :D`)