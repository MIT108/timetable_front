import Validation from '../Validation'

export default class LoginValidation{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    checkValidation(){
        let errors = []

        //check if email is valid
        if (!Validation.checkEmail(this.email)){
            errors['email'] = "Invalid email";
        }

        //check if password is valid
        if(!Validation.minLength(this.password, 4)){
            errors['password'] = "Password should be of 4 characters atleast";
        }

        return errors;
    }
}