import RoleRepository from "./RoleRepository.mjs";
import UserRepository from "./UserRepository.mjs";

UserRepository.belongsToMany(RoleRepository, {
    through: 'tbl_user_role',
    foreignKey: 'user_id',
    otherKey: 'role_id',
    createdAt: false,
    updatedAt: false
});
RoleRepository.belongsToMany(UserRepository, {
    through: 'tbl_user_role',
    foreignKey: 'role_id',
    otherKey: 'user_id',
    createdAt: false,
    updatedAt: false
});