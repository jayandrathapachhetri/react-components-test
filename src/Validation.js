function Validation(values){
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(values.email === ""){
        error.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email ="Email Didn't match"
    }
    if(values.password === ""){
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password ="Password Didn't match"
    }  

    // if(values.confirm_password === "" || String(values.confirm_password) === "" || String(values.confirm_password) !== values.password){
    //     console.log(values.confirm_password + "___" + values.password)
    //     error.confirm_password = "Password not match"
    // }

    if (values.confirm_password === "" || String(values.confirm_password) !== String(values.password)) {
        error.confirm_password = "Password does not match";
    }
      

    return error;

}

export default Validation;
