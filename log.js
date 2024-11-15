const loginForm = document.getElementById('login-form');  
const signInBtn = document.getElementById('sign-in-btn');  
  
loginForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const email = document.getElementById('email').value;  
   const password = document.getElementById('password').value;  

   console.log(`Email: ${email}, Password: ${password}`);  
});  
  
signInBtn.addEventListener('click', () => {  
  
   console.log('Sign-in button clicked!');  
});
