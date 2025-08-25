import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";
import chatRoutes from "./src/routes/chat.route.js";

import { connectDB } from "./src/lib/db.js";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

const allowedOrigins = [
  "http://localhost:5173",              // local dev
  "https://talky-3.onrender.com"        // your render domain
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(express.static(path.join(__dirname, "frontend/dist")));
res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
