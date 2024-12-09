import { DataTypes } from "npm:sequelize"
import User from "./users_model.ts";
import sequelize from "../db_setup.ts";

const Goal = sequelize.define(
    'Goal',
    {
        user_id:{
            type: new DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
                key: 'id'
            }
        },
        main_goal:{
            type: new DataTypes.ENUM,
            allowNull: false,
            values: ['LOSE WEIGHT','MAINTAIN WEIGHT','GAIN MUSCLE']
        },
        baseline_activity:{
            type: new DataTypes.ENUM,
            allowNull: false,
            values: ['NOT ACTIVE','LIGHTLY ACTIVE','ACTIVE','VERY ACTIVE']
        },
        weight_goal:{
            type: new DataTypes.FLOAT,
            allowNull: false
        },
    }
)

export default Goal