// import modules:
import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import userModel from "./user.model.js";
import postModel from "./post.model.js";

// create model
const commentModel = sequelize.define("comment", {
  content: {
    type: DataTypes.STRING(100),
  }
});
export default commentModel
userModel.hasMany(postModel
  ,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  }
);
postModel.belongsTo(userModel);
commentModel.belongsTo(postModel);
postModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
userModel.hasMany(commentModel);