"use strict";
// Path: src\models\UserModel.mjs

import UserEntitySchema from "../entities/UserEntity.js";

export class UserModel {
    static async toEntity(model) {
        return new UserEntitySchema.entity(
            model.id,
            model.username,
            model.password,
            model.email
        );
    }
}

