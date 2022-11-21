export default class UserDetail {
    #user
    constructor(user) {
        this.#user = user;
    }

    getUser() {
        return this.#user;
    }

    getAuthorities();
}