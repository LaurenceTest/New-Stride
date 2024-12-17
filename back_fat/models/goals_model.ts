import { DataTypes, InferAttributes, InferCreationAttributes, ForeignKey, CreationOptional, Model } from "npm:sequelize"
import User from "./users_model.ts";
import sequelize from "../db_setup.ts";

class Goal extends Model<InferAttributes<Goal>,InferCreationAttributes<Goal>>{
    declare id: CreationOptional<number>
    declare user_id:ForeignKey<User['id']>
    declare main_goal: string
    declare baseline_activity: string
    declare weight_goal: number
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

Goal.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    main_goal:{
        type: DataTypes.ENUM,
        allowNull:false,
        values: ['LOSE WEIGHT','MAINTAIN WEIGHT','GAIN MUSCLE']
    },
    baseline_activity:{
        type: DataTypes.ENUM,
        allowNull:false,
        values: ['NOT ACTIVE','LIGHTLY ACTIVE','ACTIVE','VERY ACTIVE']
    },
    weight_goal:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    },{
        tableName: 'Goals',
        sequelize
    }
)

export default Goal