
  document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('login-in');
    const signUpForm = document.getElementById('login-up');

    signInForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = signInForm.querySelector('.login__input[name="username"]').value;
      const password = signInForm.querySelector('.login__input[name="password"]').value;

      if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all the entries for Sign In.');
      } else {
        alert('Sign In successful!');
      }
    });

    signUpForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = signUpForm.querySelector('.login__input[name="username"]').value;
      const email = signUpForm.querySelector('.login__input[name="email"]').value;
      const password = signUpForm.querySelector('.login__input[name="password"]').value;

      if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all the entries for Sign Up.');
      } else {
        alert('Sign Up successful! Thank you for signing up.');
      }
    });
  });

