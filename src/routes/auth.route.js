import express from 'express';
import { authLogin, authSignup } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', authSignup)
authRouter.post('/login', authLogin )

export default authRouter;