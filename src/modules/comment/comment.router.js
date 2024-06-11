import {Router} from 'express'
import { addComment, deleteComment, getAllComments, updateComment } from './controller/comment.controller.js'
const commentRouter = Router()

// create comment
commentRouter.post('/', addComment);
// read comment
commentRouter.get('/', getAllComments);
// update comment
commentRouter.put("/:commentId", updateComment);
// delete comment
commentRouter.delete("/:commentId", deleteComment);



export default commentRouter