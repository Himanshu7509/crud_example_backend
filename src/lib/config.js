import {config} from 'dotenv'

config()

export const {PORT, MONGODB_URI} = process.env;
