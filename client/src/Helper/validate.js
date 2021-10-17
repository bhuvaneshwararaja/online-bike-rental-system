const checkpass = (pass,repass) => {
    if(pass != repass || pass === "" || repass === "") {
        return "Your password doesn't match"
    }
    else{
        return true
    }
}
const checkusername = (user) => {
    if(user.length < 5){
        return "name must be at least 5 characters"
    }
    else{
        return true
    }
}
const checkpassword = (password) => {
   const strongpass =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
   if(strongpass.test(password) != true){
       return "password must contain 1 Capital letter 1 Special character and must be greater than 8 character ";
   }
   else{
    return true
}
}
const checkmail= (mail) => {
    const emailvalidation = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    if(emailvalidation.test(mail) != true){
        return "kindly check email format"
    }
    else{
        return true
    }
}
const checkmobile = (mobileno) => {
    const mobilevalidation = new RegExp("^(?=.*[0-9])(?=.{10,})");
    if(mobilevalidation.test(mobileno) != true){
        return "mobile number should contain 10 numbers"
    }
    else{
        return true
    }
}

module.exports = {
    checkpass,
    checkusername,
    checkpassword,
    checkmail,
    checkmobile
}