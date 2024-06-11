// import modules:
import sequelize from "../connection.js";
import { DataTypes } from "sequelize";
// create model:
const userModel = sequelize.define('user', {
    userName:{
        type:DataTypes.STRING(100)
    },
    email:{
        type:DataTypes.STRING(100)
    },
    password:{
        type:DataTypes.STRING(255)
    }
})

export default userModel
