import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";  // Import User Routes

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Use User Routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
