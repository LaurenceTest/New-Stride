import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from "npm:sequelize"
import User from "./users_model.ts";
import sequelize from "../db_setup.ts";

class Workout extends Model<InferAttributes<Workout>,InferCreationAttributes<Workout>>{
    declare id:CreationOptional<number>
    declare user_id:ForeignKey<User['id']>
    declare name:string
    declare type:string
    declare duration:Date | null
    declare repetition:number | null
    declare weight:number
    declare intensity:number
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

Workout.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type:{
            type: DataTypes.ENUM,
            values: ['CARDIOVASCULAR','STRENGTH TRAINING'],
            allowNull: false
        },
        duration:{
            type: DataTypes.TIME,
            allowNull: true
        },
        repetition:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        intensity:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },{
        tableName: 'Workouts',
        sequelize
    }
)

export default Workout