import {Router} from 'express';

const commentsRouter = Router();

const verifyUser = ()=>{

}


commentsRouter.get('/api/comments', getComments);
commentsRouter.post('/api/comments', verifyUser, createComment);
commentsRouter.put('/api/comments/:commentId', verifyUser, updateComment);
commentsRouter.delete('/api/comments/:commentId', verifyUser, deleteComment);
export default commentsRouter;
