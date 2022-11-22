"use strict";



import getJwtProvider from "../../configs/security/jwt/JwtProvider.mjs";

async function myInfo(req, res) {
    const user = {
        "admin": "admin",
        password: "12345",
        email: "admin@admin.com"
    };
    res.send(user);
}

async function login(req, res) {
    const token = await getJwtProvider().sign("admin");
    res.send(token);
}

const accountHandler = {
    myInfo,
    login,
};
export default accountHandler;