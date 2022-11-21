class JwtFilter {
    #PUBLIC_PATHS
    #userService

    constructor(publicUrls, userService) {
        this.#PUBLIC_PATHS = publicUrls;
        this.userService = userService;
    }

    filter(req, res, next) {
        if (this.#PUBLIC_PATHS.includes(req.path)) {
            next();
            return;
        }
        const token = req.headers['Authorization'];
        if (!token) {
            res.status(401).send({
                message: 'Unauthorized',
                status: 401,
            });
            return;
        }

        const userDetail = this.userService.validateToken(token.substr(7));
        req.$auth = userDetail;
        next();
    }
};

let jwtFilter = null;

export default function getJwtFilter(publicUrls, userService) {
    if (jwtFilter === null)
        jwtFilter = new JwtFilter(publicUrls, userService);
    return jwtFilter;
};
