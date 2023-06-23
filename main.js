const button = document.querySelector(".main__container__form__submit");
const email = document.querySelector(".main__container__form__email");
const error = document.querySelector(".main__container__form__email--error")

button.addEventListener('click', (event)=> {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(email.value) == true) {
        email.style.border = '1px solid hsl(223, 100%, 88%)';
        error.innerHTML = '';
    }else{
        event.preventDefault();        
        email.style.border = '1px solid red';
        error.innerHTML = 'Please provide a valid email';
    }
});