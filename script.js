let btn = document.getElementById('the-button');

btn.addEventListener('click', () => {
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('confirmPassword');
    let warning = document.querySelector('.insert')


    if(password.value !== passwordConfirm.value || password.value === '' || passwordConfirm === ''){
        warning.textContent = '* Passwords do not match';
        password.style.borderColor = '#d57979';
        password.style.border = '1px solid #d57979';
        password.style.boxShadow = '0 0 10px #d57979';
        passwordConfirm.style.borderColor = '#d57979';
        passwordConfirm.style.border = '1px solid #d57979';
        passwordConfirm.style.boxShadow = '0 0 10px #d57979';    
    }
    else{
        warning.textContent = ``;
        password.style.borderColor = '';
        password.style.border = '2px solid lightgrey';
        password.style.boxShadow = '0 0 0 #6888e3';
        passwordConfirm.style.borderColor = '';
        passwordConfirm.style.border = '2px solid lightgrey';
        passwordConfirm.style.boxShadow = '0 0 0 #6888e3';   
    }
    





});