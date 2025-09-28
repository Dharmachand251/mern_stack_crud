import User from "../model/userModel.js";  

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, address } = req.body;
        const newUser = new User({ name, email, address });
        const checkEmail = await User.findOne({ email: email });
        if (checkEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        
        await newUser.save();
        //res.status(201).json(newUser);
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name, email, address } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, address },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //res.status(200).json(user);
        res.status(200).json({ message: "User updated successfully", user: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
