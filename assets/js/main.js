/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})




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

