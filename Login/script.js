//*sqlite3 -> banco de dados dos guri ;D

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

//Apply style to email label even if invalid

document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("emailInput");

    if (emailInput) {
        emailInput.addEventListener("blur", function() {
            if (emailInput.value) {
                emailInput.id = "emailFieldWithValue";
            } else {
                emailInput.id = "emailInput";
            }
        });
    }
});