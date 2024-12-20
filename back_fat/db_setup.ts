import { Sequelize } from "npm:sequelize"

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: Deno.env.get("DB_NAME"),
  username: Deno.env.get("DB_USERNAME"),
  password: Deno.env.get("DB_PASSWORD"),
  host: Deno.env.get("DB_HOST"),
  port: Number(Deno.env.get("DB_PORT")),
  logging:false
})
export default sequelize

export const syncTables = ()=>{
  for(const model in sequelize.models){
    sequelize.models[model].sync()
  }
}