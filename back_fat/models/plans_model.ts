import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from "npm:sequelize"
import User from "./users_model.ts";
import sequelize from "../db_setup.ts";

class Plan extends Model<InferAttributes<Plan>,InferCreationAttributes<Plan>>{
    declare id: CreationOptional<number>
    declare user_id:ForeignKey<User['id']>
    declare name:string
    declare type:string
    declare duration:string | null
    declare repetition:number | null
    declare sets:number | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

Plan.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    type:{
        type: DataTypes.ENUM,
        allowNull:false,
        values: ['CARDIOVASCULAR','STRENGTH TRAINING']
    },
    duration: DataTypes.TIME,
    repetition: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    },{
        tableName: 'Plans',
        sequelize
    }
)

export default Plan