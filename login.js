function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'hide-password.png';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'show-password.png';
    }
}

function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful!');
    }
}
