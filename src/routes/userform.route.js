import express from 'express';
import { deleteUserForm, getUserForms, updateUserForm, userForm } from '../controllers/userform.controller.js';

const userFormRouter = express.Router();

userFormRouter.post('/user-form', userForm)
userFormRouter.get('/user-detail/:userId', getUserForms)
userFormRouter.put('/update-user/:userId', updateUserForm)
userFormRouter.delete('/delete-form/:userId', deleteUserForm)

export default userFormRouter;