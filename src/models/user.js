import mongoose from "mongoose";

// Define a schema for User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Name is required
        trim: true       // Removes extra spaces at the start & end
    },
    email: {
        type: String,
        required: true,  // Email is required
        unique: true,    // Ensures no duplicate emails exist
        lowercase: true, // Converts email to lowercase before saving
        trim: true
    },
    age: {
        type: Number,
        required: true,  // Age is required
        min: 1           // Minimum age should be 1
    }
}, {
    timestamps: true  // Automatically adds `createdAt` and `updatedAt`
});

// Create and export the User model
const User = mongoose.model("User", userSchema);
export default User;
