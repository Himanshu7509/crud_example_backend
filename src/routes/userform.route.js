import express from 'express';
import checkToken from '../middleware/middleware.js';
import { deleteUserForm, getAllDetails, getUserForms, updateUserForm, userForm } from '../controllers/userform.controller.js';

const userFormRouter = express.Router();

userFormRouter.post('/user-form',checkToken, userForm)
userFormRouter.get('/user-detail/:userId',checkToken, getUserForms)
userFormRouter.put('/update-user/:userId',checkToken, updateUserForm)
userFormRouter.delete('/delete-form/:userId',checkToken, deleteUserForm)
userFormRouter.get('/all-users', checkToken, getAllDetails)

export default userFormRouter;