import {Router} from 'express'
import { addPost, deletePost, getAllPosts, getSpecificPost, updatePost } from './controller/post.controller.js';
const postRouter = Router();
// create post
postRouter.post('/', addPost);
// read post
postRouter.get('/', getAllPosts);
// update post
postRouter.put('/:postId', updatePost);
// delete post
postRouter.delete('/:postId', deletePost);
// get a specific post with its author
postRouter.get('/:postId', getSpecificPost)


export default postRouter