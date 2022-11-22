"use strict";
// Path: src\mappers\UserMapper.mjs

export default class UserMapper {
    static async toEntity(model) {
        const entity = {};
        entity.id = model.id;
        entity.username = model.username;
        entity.password = model.password;
        entity.email = model.email;
        entity.role = model.role;
        return entity;
    }
}