const contaner = document.querySelector(".contaner");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener('click', () => {
    contaner.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    contaner.classList.remove('active');
});