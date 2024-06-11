// import modules 
import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
// create model:
const postModel = sequelize.define("post", {
  title: {
    type: DataTypes.STRING(100),
  },
 content: {
    type: DataTypes.STRING(100),
  },
 
});



export default postModel