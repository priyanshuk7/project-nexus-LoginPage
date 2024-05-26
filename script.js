let signUpBtn= document.querySelector('.signupbtn');
let signInBtn= document.querySelector('.signinbtn');
let nameField= document.querySelector('.namefield');
let title= document.querySelector('.title');
let underline= document.querySelector('.underline');
let text1= document.querySelector('.text1');


signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML= 'Sign In';
    text1.innerHTML= 'Lost password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform= 'translateX(35px)';
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML= 'Sign Up';
    text1.innerHTML= 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform= 'translateX(0)';
});