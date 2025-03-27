import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 12}
})

const Auth = mongoose.model("Auth", authSchema);

export default Auth;