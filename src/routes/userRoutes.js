import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/userController.js";  // Import Controller Functions

const router = express.Router();

// Define routes
router.post("/", createUser);      // Create a new user
router.get("/", getAllUsers);      // Get all users
router.get("/:id", getUserById);   // Get a user by ID
router.put("/:id", updateUser);    // Update a user
router.delete("/:id", deleteUser); // Delete a user

export default router;
