import express from "express";
import initResources from "./src/bases/route/Index.js";
import accountResource from "./src/resources/account/index.js";
import getJwtProvider from "./src/configs/security/jwt/JwtProvider.mjs";


const app = express();

initResources(app, accountResource);
app.use((req, res) => {
    res.end(req.headers['host']);
})


const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});


function for404(req, res) {
    const obj = {
        message: 'Not Found Path',
        status: 404,
        url: req.url,
    };
    res.status(404).send(obj);
}