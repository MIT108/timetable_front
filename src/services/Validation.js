export default class Validation{
    static checkEmail(email){
        if (email)
        {
          return true
        }
        return false
    }

    static minLength(name, minLength){
        if(name.length < minLength){
            return false
        }
        return true
    }
}