import { DataTypes } from "npm:sequelize"
import sequelize from "../db_setup.ts";

const Plan = sequelize.define(
    'Plan',{
        workout_name: {
            type: new DataTypes.STRING,
            allowNull: false
        },
        workout_type: {
            type: new DataTypes.ENUM,
            values: ['CARDIOVASCULAR','STRENGTH_TRAINING'],
            allowNull: false
        },
        duration: {
            type: new DataTypes.INTEGER,
            allowNull: false
        },
        repetition: {
            type: new DataTypes.INTEGER,
            allowNull: false
        },
    }
)

export default Plan