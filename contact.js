document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the html validation

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });

    let valid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name === '' || !/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }


    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Reset form
    }
});
