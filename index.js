// import modules:
import express from 'express'
import sequelize from './DB/connection.js';
import userRouter from './src/modules/user/user.router.js';
import postRouter from './src/modules/post/post.router.js';
import commentRouter from './src/modules/comment/comment.router.js';

// create server:
const app = express();
const port = 3000
// db connection

 sequelize.sync();
 

// app usage:
app.use(express.json())
app.use('/users', userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
// listen to server 
app.listen(port, ()=>{
    console.log('server is running on port', port);
})