import { DataTypes } from "npm:sequelize"
import sequelize from "../db_setup.ts";

const User = sequelize.define(
    'User',
    {
        username:{
            type: new DataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: new DataTypes.STRING(50),
            allowNull: false
        },
        password:{
            type: new DataTypes.STRING(32),
            allowNull: false
        },
        birth_date:{
            type: new DataTypes.DATEONLY,
            allowNull: false
        },
        height:{
            type: new DataTypes.FLOAT,
            allowNull: false
        },
        weight:{
            type: new DataTypes.FLOAT,
            allowNull: false
        },
        gender:{
            type: new DataTypes.BOOLEAN,
            allowNull: false
        }
    }
);

export default User