"use strict";

// Path: src\dtos\UserDto.mjs

export class UserDto {

    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    static async toDto(entity) {

    }
}