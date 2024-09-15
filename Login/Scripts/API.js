let username = document.querySelector('#registerUser');
let email = document.querySelector('#registerEmail');
let password = document.querySelector('#registerPassword');
const apiUrl = 'http://localhost:3000'

function createUser() {
    loading({ buttonType: 'register' })

    axios.post(`${apiUrl}/user`, {
        name: username.value,
        email: email.value,
        password: password.value
      })
      .then((response) => {
        console.log(response);

        sendToLoginPage()
        stopLoading({ buttonType: 'register' })

        alert(`User ${username.value} created!`)
      })
      .catch((error) => {
        console.error(error);
      });
}

function login() {
    const loginPassword = document.querySelector('#passwordInput').value;
    const loginEmail = document.querySelector('.email-input').value;

    loading({ buttonType: 'login' })

    axios.post(`${apiUrl}/login`, {
        email: loginEmail,
        password: loginPassword
    })
    .then((response) => {
        if (!response.data) {
            return alert('Wrong email or password. Try again.')
        }
        
        window.location.pathname = '/Login/pages/home.html'
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        stopLoading({ buttonType: 'login' })
      })
};

function sendToLoginPage() {
    username.value = ''
    email.value = ''
    password.value = ''

    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.remove('active');
}

function loading(params = {}) {
    const { buttonType } = params;

    const button = buttonType === 'register' 
        ? document.querySelector('#register-btn') 
        : document.querySelector('#login-btn')

    button.innerHTML = '<img src="./Assets/loading-spinner.gif"></img>'
}

function stopLoading(params = {}) {
    const { buttonType } = params;

    const button = buttonType === 'register' 
        ? document.querySelector('#register-btn') 
        : document.querySelector('#login-btn')

    button.innerHTML = 'Registrar'
}