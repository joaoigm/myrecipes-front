export class User {
    id: String
    email: String
    password: String

    constructor(email: String = null){
        this.email = email;
    }
    
}