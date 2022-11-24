import express from "express";
import initResources from "./src/bases/route/Index.js";
import accountResource from "./src/resources/api/account/Index.js";
import getJwtFilter from "./src/configs/jwt.config.mjs";
import './src/repositories/Index.mjs';
import bodyParser from "body-parser";
import multer from "multer";
import CustomExceptionHandler from "./src/resources/exception/CustomExceptionHandler.mjs";
import {config} from "dotenv";
import adminController from "./src/resources/admin/Index.mjs";

const app = express();
config(); // for load .env file


// config static files
app.use(express.static('assets'));

// for config view engine
app.set('views', './views');
app.set('view engine', 'ejs');


// for config filter
app.use(await getJwtFilter());

// for config body
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(multer().array());


// for resources && controllers
initResources(app,
    // for api
    accountResource,

    // for controller admin
    adminController
);


// for custom exception
app.use(CustomExceptionHandler);



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