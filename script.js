document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const password1El = document.getElementById('password1');
    const password2El = document.getElementById('password2');
    const messageContainer = document.querySelector('.message-container');
    const message = document.getElementById('message');

    let isValid = false;
    let passwordsMatch = false;

    function validateForm() {
        // Using Constraint API 
        isValid = form.checkValidity();
        // Style main message for an error
        if (!isValid) {
            message.textContent = 'Please fill out all fields.';
            message.style.color = 'red';
            messageContainer.style.borderColor = 'red';
        }
        // Check to see if passwords match
        if (password1El.value === password2El.value) {
            passwordsMatch = true;
            password1El.style.borderColor = 'green';
            password2El.style.borderColor = 'green';
        } else {
            passwordsMatch = false;
            message.textContent = 'Make sure passwords match.';
            message.style.color = 'red';
            messageContainer.style.borderColor = 'red';
            password1El.style.borderColor = 'red';
            password2El.style.borderColor = 'red';
        }
    }

    function processFormData(e) {
        e.preventDefault();
        // Validate Form
        validateForm();
        if (isValid && passwordsMatch) {
            message.textContent = 'Successfully Registered!';
            message.style.color = 'green';
            messageContainer.style.borderColor = 'green';
            console.log('Form submitted successfully');
        } else {
            console.log('Form validation failed');
        }
    }

    // Event Listener
    form.addEventListener('submit', processFormData);
});
