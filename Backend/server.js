import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import initSocket from "./socket/socket.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// 🔥 create HTTP server
const server = http.createServer(app);

// 🔥 initialize socket
const io = initSocket(server);

// 🔥 start server
server.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server + Socket running on port ${PORT}`);
});

export { app, io };
