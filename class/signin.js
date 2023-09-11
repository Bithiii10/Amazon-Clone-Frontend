

document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       
        if (username === 'user' && password === 'password') {
            alert('Sign in successful');
            
        } else {
            alert('Invalid credentials');
        }
    });
});
