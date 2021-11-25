
const getFormValues = () => {
    var signUp = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    for (x in signUp) {
        signUp[x] = document.getElementById(x).value;
    }
    console.log(signUp);
    return signUp;

}
const validateEmail = (input) => {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(input);

};
const validatePassword = (input) => {
    let result = false;
    return result;

};
const validateUserName = (input) => {
   let regex = new RegExp(/^[a-zA-Z0-9]+$/);
    return input && input.length>=6 && regex.test(input);
}
const validateConfirmPassword = (input) => {
    let result = false;
    return result;
};
const signup = () => {
    /*
    call all validations if everythisn is validated return success
    else failure
    */
   let register = getFormValues();

   if(validateEmail(register.email) 
   && validateUserName(register.username) && 
   validatePassword(register.password)&& 
   validateConfirmPassword(register.password)){
    
//post the data to the server.
   }
}

var btn = document.getElementById('register');
btn.addEventListener('click',signup);