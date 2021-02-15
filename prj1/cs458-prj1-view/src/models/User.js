export default class User {
    constructor(email, password, phoneNumber) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.signUpStep = 0;
    }

    setSignUpStep(step) {
        this.signUpStep = step;
    }
}