"use strict";
import getEntityManager from "../configs/db.config.mjs";
import "./UserRepository.mjs";
import "./ConstraintConfig.mjs";
import {initRole, initUser} from "./Init.mjs";


const entityManager = await getEntityManager();
entityManager.sync({alter: true});


await initRole();
await initUser();
