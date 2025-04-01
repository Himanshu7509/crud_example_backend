import mongoose from "mongoose";

const userFormSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, 
        ref: "Auth",
        required: true,
        unique: true
    },

    fullName: {type: String, required: true},
    age: {type: Number, required: true},
    address: {type: String, required: true}},
    {timestamps: true}
)

const UserForm = mongoose.model("UserForm", userFormSchema);

export default UserForm;