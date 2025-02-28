function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const toggleIcon = passwordInput.nextElementSibling.querySelector('.toggle-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'assets/icons/hide-password.png';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'assets/icons/show-password.png';
    }
}

function validateUsernameOrEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

    if (emailRegex.test(input)) {
        return 'email';
    } else if (usernameRegex.test(input)) {
        return 'username';
    } else {
        return 'invalid';
    }
}

function validateRegistrationForm(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const usernameOrEmail = document.getElementById('username-or-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';
    errorMessage.classList.remove('visible');

    if (!fullname || !usernameOrEmail || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.classList.add('visible');
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.classList.add('visible');
        return;
    }

    const validationResult = validateUsernameOrEmail(usernameOrEmail);
    if (validationResult === 'invalid') {
        errorMessage.textContent = 'Please enter a valid username or email.';
        errorMessage.classList.add('visible');
        return;
    }

    alert('Registration successful!');
}