// @ts-typs="npm:@types/sequelize@^6.37.5"
import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "npm:sequelize"
import sequelize from "../db_setup.ts";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<number>
    declare username:string
    declare email:string
    declare password:string
    declare birth_date:Date
    declare height:number
    declare weight:number
    declare is_male:boolean
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: new DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type: new DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password:{
        type: new DataTypes.STRING(72),
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
    is_male:{
        type: new DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    },
    {
        tableName: 'Users',
        sequelize
    }
)

export default User