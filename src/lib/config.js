import {config} from 'dotenv'

config()

export const {PORT, MONGODB_URI, JWT_SECRET} = process.env;
