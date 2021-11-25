var username= document.getElementById('username');
var email= document.getElementById('email');
var password= document.getElementById('password');
var confirm= document.getElementById('confirm');
var btn = document.getElementById('btnSubmit');
//attach click event to the button

var handleButtonClick =()=>{
    let register = {
        username:"",
        email:"",
        password:"",
        confirm:""
    }
    register.confirm = confirm.value;
    register.username = username.value;
    register.password = password.value;
    register.email = email.value;
    console.log(register);
}
btn.addEventListener('click',handleButtonClick);