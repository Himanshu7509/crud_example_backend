import Auth from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export const authSignup = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const existhingUser = await Auth.findOne({email})
        if (existhingUser) return res.status(400).json({ message: 'Email already exists' });
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
       const user =  await Auth({email, password: hashedPassword

       }).save()
        res.status(201).json({ message: 'User registered successfully', user });


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
        
    }
}