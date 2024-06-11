import postModel from "../../../../DB/models/post.model.js"
import userModel from "../../../../DB/models/user.model.js";
// create post
export const addPost = async(req, res, next)=>{
const{title, content, userId}= req.body;
const newPost = await postModel.create({title, content, userId});
return res.status(201).json({message:'created', data:newPost, success:'true'});
};
// read post
export const getAllPosts = async(req, res, next)=>{
    const posts = await postModel.findAll();
    return res.status(200).json({success:true, data:posts});
};
// update post
export const updatePost = async(req, res, next)=>{
    const updatedPost = await postModel.update(req.body, {
        where:{
            id: req.params.postId
        }
      
    })
    return res.json({success:true, message:'updated successfully', data:updatedPost})
}
// delete post
export const deletePost = async (req, res, next) => {
  const deletedPost = await postModel.destroy({
    where: {
      id: req.params.postId,
    },
  });
  return res.json({success: true,message: "deleted successfully",  data: deletedPost });
};
// get a specific post with its author
export const getSpecificPost = async(req, res, next)=>{
  const specificPost = await postModel.findByPk(req.params.postId, {
    include:{
      model:userModel,
      attributes:{
        exclude:["password", "createdAt", "updatedAt", "email","id"]
      }
    }
  });
  return res.status(200).json({success:true, data:specificPost})
};

 