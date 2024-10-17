document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    if (email) {
        // Google Apps Script or backend integration
        alert(`Thank you for subscribing with ${email}`);
        document.getElementById('email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
