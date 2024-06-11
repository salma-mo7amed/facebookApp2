import commentModel from "../../../../DB/models/comment.model.js";
// create comment
export const addComment = async (req, res, next) => {
  const {  content, userId, postId } = req.body;
  const newComment = await commentModel.create({  content,  postId, userId });
  return res.status(201).json({ message: "created", data: newComment, success: "true" });
};
// read comment
export const getAllComments = async(req, res, next)=>{
    const comments = await commentModel.findAll();
    return res.status(200).json({success:true, data:comments});
};
// update comment
export const updateComment = async(req, res, next)=>{
    const updatedComment = await commentModel.update(req.body, {
        where:{
            id: req.params.commentId
        }
      
    })
    return res.json({success:true, message:'updated successfully', data:updatedComment})
}
// delete comment
export const deleteComment = async (req, res, next) => {
  const deletedComment = await commentModel.destroy({
    where: {
      id: req.params.commentId,
    },
  });
  return res.json({success: true,message: "deleted successfully",  data: deletedComment });
};