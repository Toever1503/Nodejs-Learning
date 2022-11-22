import getJwtProvider from "../configs/security/jwt/JwtProvider.mjs";


class UserService {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }

    async validateToken(token) {
        return getJwtProvider().verify(token);
    }
}

let userService;

export default function getUserService() {
    if (!userService)
        userService = new UserService();
    return userService;
};