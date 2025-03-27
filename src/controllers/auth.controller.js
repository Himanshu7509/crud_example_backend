import Auth from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export const authSignup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existhingUser = await Auth.findOne({ email });
    if (existhingUser)
      return res.status(400).json({ message: "Email already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await Auth({ email, password: hashedPassword }).save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const authLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      const existingUser  = await Auth.findOne({ email });
      if (!existingUser )
        return res.status(404).json({ message: "User  not found" });
  
      const isValidPassword = await bcrypt.compare(password, existingUser .password);
      if (!isValidPassword)
        return res.status(401).json({ message: "Invalid password" });
  
      res.status(200).json({ message: "Login successful", user: existingUser  });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };