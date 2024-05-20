// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value;
        // Call a function to handle login logic
        loginUser(email, password);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('#name').value;
        const email = signupForm.querySelector('#email').value;
        const password = signupForm.querySelector('#password').value;
        // Call a function to handle sign-up logic
        signupUser(name, email, password);
    });
});

function loginUser(email, password) {
    // Implement login logic here
    console.log(`Login with email: ${email}, password: ${password}`);
    // Redirect to product page after successful login
    window.location.href = 'products.html';
}

function signupUser(name, email, password) {
    // Implement sign-up logic here
    console.log(`Sign up with name: ${name}, email: ${email}, password: ${password}`);
    // Redirect to login page after successful sign-up
    window.location.href = 'login.html';
}
