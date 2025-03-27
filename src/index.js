import express from 'express';

import { PORT } from './lib/config.js';
import dbConnect from './lib/mongoDb.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());

app.use('/auth', authRouter)
app.listen(PORT, async() =>{
    console.log(`Server is running on port ${PORT}`);
    await dbConnect()
}) 
