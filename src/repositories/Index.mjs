"use strict";
import getEntityManager from "../configs/db.config.mjs";
import "./UserRepository.mjs";
import "./RoleRepository.mjs";
import "./ConstraintConfig.mjs";
import RoleRepository from "./RoleRepository.mjs";
import UserRepository from "./UserRepository.mjs";

const entityManager = await getEntityManager();
entityManager.sync({alter: true});

console.log(entityManager)
const user = await UserRepository.create({
    userName: 'admin',
    password: '1234',
    email: 'admiN@admin.com',
    roles: [
        {
            id: 1,
            roleName: 'ROLE_ADMIN',
            tbl_user_role: {
                selfGranted: true
            }
        }
    ]
});

