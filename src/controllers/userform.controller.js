import UserForm from "../models/user-form.model.js";

export const userForm = async (req, res, next) => {
    try {
        const { userId, fullName, age, address } = req.body;

        if (!userId || !fullName || !age || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newUserForm = new UserForm({ userId, fullName, age, address });
        await newUserForm.save();

        res.status(201).json({ message: "Form submitted successfully", user: newUserForm });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllDetails = async(req, res, next) =>{
    try {
        const userForms = await UserForm.find({});
        if (!userForms) {
            return res.status(404).json({ message: "No forms found" });
        }
        res.status(200).json({ userForms });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
}

export const getUserForms = async (req, res, next) => {
    try {
        const { userId } = req.params; 

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const userForm = await UserForm.findOne({ userId });

        if (!userForm) {
            return res.status(404).json({ message: "User form not found" });
        }

        res.status(200).json({ userForm });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateUserForm = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { fullName, age, address } = req.body;

        if (!fullName && !age && !address) {
            return res.status(400).json({ message: "At least one field must be provided to update" });
        }

        const userForm = await UserForm.findOne({ userId });
        if (!userForm) {
            return res.status(404).json({ message: "User form not found" });
        }

        if (fullName) userForm.fullName = fullName;
        if (age) userForm.age = age;
        if (address) userForm.address = address;
        await userForm.save();
        res.status(200).json({ message: "User form updated successfully", userForm });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const deleteUserForm = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const deleteuserForm = await UserForm.findOneAndDelete({ userId });
        if (!deleteuserForm) {
            return res.status(404).json({ message: "User form not found" });
        }
        res.status(200).json({ message: "User form deleted successfully", deleteuserForm });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}