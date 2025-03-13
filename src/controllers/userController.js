import User from "../models/user.js";

// Helper function to validate email format
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Check if all fields are present
        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields (name, email, age) are required" });
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // Check if email is already taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        // Create and save new user
        const newUser = await User.create({ name, email, age });
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

// Get single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Invalid user ID or error fetching user", error: error.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Validate email if provided
        if (email && !isValidEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Invalid user ID or error deleting user", error: error.message });
    }
};
