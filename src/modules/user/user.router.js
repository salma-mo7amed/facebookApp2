// import modules
import {Router} from 'express';
import { getAllUsers, getSpecificUser, getUsersInfo, logIn, signUP } from './controller/user.controller.js';

const userRouter = Router();
// add user _ registration:
userRouter.post('/signup', signUP);
// login
userRouter.post('/login', logIn);
// getAllUsers
userRouter.get('/', getAllUsers);
// get users with posts and comments
userRouter.get('/usersInfo', getUsersInfo )
// get a specific user with its posts and comments
userRouter.get('/:userId', getSpecificUser)




export default userRouter