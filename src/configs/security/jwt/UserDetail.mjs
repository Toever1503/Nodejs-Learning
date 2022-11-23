"use strict";
import {Model} from "sequelize";

export default class UserDetail extends Model {

    getAuthorities() {
        throw new Error("UserDetail has not implemented func 'getAuthorities'");
    };
};

