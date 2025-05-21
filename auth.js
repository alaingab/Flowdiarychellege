document.addEventListener('DOMContentLoaded', () => {
        const authForm = document.getElementById('authForm');
            const emailInput = document.getElementById('email');
              document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Function to validate email format
    const isValidEmail = (email) => {
        // A common regex for email validation (can be more complex depending on requirements)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to display error messages
    const displayError = (element, message) => {
        element.textContent = message;
        element.style.display = 'block'; // Show the error message
    };

    // Function to hide error messages
    const hideError = (element) => {
        element.textContent = '';
        element.style.display = 'none'; // Hide the error message
    };

    // Event listener for form submission
    authForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let valid = true; // Flag to track overall form validity

        // 1. Validate Email Input
        const email = emailInput.value.trim();
        if (email === '') {
            displayError(emailError, 'Email cannot be empty.');
            valid = false;
        } else if (!isValidEmail(email)) {
            displayError(emailError, 'Please enter a valid email address.');
            valid = false;
        } else {
            hideError(emailError); // Clear any previous email errors
        }

        // 2. Validate Password Input
        const password = passwordInput.value.trim();
        if (password === '') {
            displayError(passwordError, 'Password cannot be empty.');
            valid = false;
        } else {
            hideError(passwordError); // Clear any previous password errors
        }

        // If all inputs are valid, you can proceed with form submission (e.g., via AJAX)
        if (valid) {
            alert('Form submitted successfully!\nEmail: ' + email + '\nPassword: ' + password);
            // In a real application, you would send this data to a server
            // e.g., fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));

            authForm.reset(); // Optionally reset the form after successful submission
        }
    });

    // Optional: Real-time validation as user types
    emailInput.addEventListener('input', () => {
        const email = emailInput.value.trim();
        if (email === '') {
            hideError(emailError); // Hide error if user clears field
        } else if (!isValidEmail(email)) {
            displayError(emailError, 'Please enter a valid email address.');
        } else {
            hideError(emailError);
        }
    });

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value.trim();
        if (password === '') {
            hideError(passwordError); // Hide error if user clears field
        } else {
            hideError(passwordError);
        }
    });
});  const passwordInput = document.getElementById('password');
                    const emailError = document.getElementById('emailError');
                        const passwordError = document.getElementById('passwordError');

                            // Function to validate email format
                                const isValidEmail = (email) => {
                                        // A common regex for email validation (can be more complex depending on requirements)
                                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                        return emailRegex.test(email);
                                                            };

                                                                // Function to display error messages
                                                                    const displayError = (element, message) => {
                                                                            element.textContent = message;
                                                                                    element.style.display = 'block'; // Show the error message
                                                                                        };

                                                                                            // Function to hide error messages
                                                                                                const hideError = (element) => {
                                                                                                        element.textContent = '';
                                                                                                                element.style.display = 'none'; // Hide the error message
                                                                                                                    };

                                                                                                                        // Event listener for form submission
                                                                                                                            authForm.addEventListener('submit', (event) => {
                                                                                                                                    event.preventDefault(); // Prevent default form submission

                                                                                                                                            let valid = true; // Flag to track overall form validity

                                                                                                                                                    // 1. Validate Email Input
                                                                                                                                                            const email = emailInput.value.trim();
                                                                                                                                                                    if (email === '') {
                                                                                                                                                                                displayError(emailError, 'Email cannot be empty.');
                                                                                                                                                                                            valid = false;
                                                                                                                                                                                                    } else if (!isValidEmail(email)) {
                                                                                                                                                                                                                displayError(emailError, 'Please enter a valid email address.');
                                                                                                                                                                                                                            valid = false;
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                hideError(emailError); // Clear any previous email errors
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                // 2. Validate Password Input
                                                                                                                                                                                                                                                                        const password = passwordInput.value.trim();
                                                                                                                                                                                                                                                                                if (password === '') {
                                                                                                                                                                                                                                                                                            displayError(passwordError, 'Password cannot be empty.');
                                                                                                                                                                                                                                                                                                        valid = false;
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                            hideError(passwordError); // Clear any previous password errors
                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                            // If all inputs are valid, you can proceed with form submission (e.g., via AJAX)
                                                                                                                                                                                                                                                                                                                                                    if (valid) {
                                                                                                                                                                                                                                                                                                                                                                alert('Form submitted successfully!\nEmail: ' + email + '\nPassword: ' + password);
                                                                                                                                                                                                                                                                                                                                                                            // In a real application, you would send this data to a server
                                                                                                                                                                                                                                                                                                                                                                                        // e.g., fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
                                                                                                                                                                                                                                                                                                                                                                                                    // .then(response => response.json())
                                                                                                                                                                                                                                                                                                                                                                                                                // .then(data => console.log(data))
                                                                                                                                                                                                                                                                                                                                                                                                                            // .catch(error => console.error('Error:', error));

                                                                                                                                                                                                                                                                                                                                                                                                                                        authForm.reset(); // Optionally reset the form after successful submission
                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Optional: Real-time validation as user types
                                                                                                                                                                                                                                                                                                                                                                                                                                                            emailInput.addEventListener('input', () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const email = emailInput.value.trim();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (email === '') {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        hideError(emailError); // Hide error if user clears field
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else if (!isValidEmail(email)) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            displayError(emailError, 'Please enter a valid email address.');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                hideError(emailError);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                passwordInput.addEventListener('input', () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const password = passwordInput.value.trim();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (password === '') {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            hideError(passwordError); // Hide error if user clears field
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                hideError(passwordError);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });
})