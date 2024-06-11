import commentModel from "../../../../DB/models/comment.model.js";
import postModel from "../../../../DB/models/post.model.js";
import userModel from "../../../../DB/models/user.model.js";
import bcrypt from 'bcrypt';

// sign up:
export const signUP = async (req, res, next)=>{
 const {userName, email, password} = req.body;
 const isEmail = await userModel.findOne({
    where:{
        email
    },
 });
 if(isEmail){
    return res.json({message:'Email already exists'})
 }
 const hashPassword = bcrypt.hashSync(password, 8);
 const user = await userModel.create({
    userName,
    email,
    password:hashPassword
 })
 return res.status(201).json({message:'created successfully', data:user, message:'success'})
};
// login
export const logIn = async (req, res, next)=>{
    const {email, password} = req.body;
    const isUserExist = await userModel.findOne({
        where:{
            email
        }
    });
    if(! isUserExist || ! bcrypt.compareSync(password, isUserExist.password)){
        return res.json({message:'invalid credential'})
    }
     
   return res.json({message:`welcome to your profile`})
};

// get all users:
export const getAllUsers = async (req, res, next)=>{
    const users = await userModel.findAndCountAll({
        attributes:{
            exclude:'password'
        }
    })
    return res.status(200).json({ success: true, data: users });
};
// get all users with posts and comments
export const getUsersInfo = async(req, res, next)=>{
    const allUsers = await userModel.findAll({
        include:[
         {model:postModel},
         {model:commentModel}
        ]
    })
    return res.status(200).json({data:allUsers, success:true})
       
};
// get a specific user with its posts and comments
export const getSpecificUser = async (req, res, next)=>{
    const user = await userModel.findByPk(req.params.userId,
        {include:[
            {model:postModel},
            {model:commentModel}
        ]}
    )

    return res.status(200).json({message:"success", data:user, success: 'true'})
}
