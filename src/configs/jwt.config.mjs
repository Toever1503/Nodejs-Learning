"use strict";
import JwtFilter from "./security/jwt/JwtFilter.mjs";
import getUserService from "../services/UserService.mjs";
import RequestMatcher from "./security/RequestMatcher.js";

const publicUrls = [
    new RequestMatcher('/account/login'),
];


let jwtFilter = null;
export default async function getJwtFilter() {
    if (jwtFilter === null)
        jwtFilter = new JwtFilter(publicUrls, await getUserService());
    return async (req, res, next) => {
        jwtFilter.filter(req, res, next);
    };
};