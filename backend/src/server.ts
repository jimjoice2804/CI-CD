import express from "express"
import cors from "cors"
import "dotenv/config";
import apiRouter from "./routers/index.js"

const app = express();

// Enable CORS for frontend
const allowedOrigins = [
    "http://localhost:5173",// Vite dev
    "http://localhost:3000"
]

app.use(cors({
    // origin: process.env.FRONTEND_URL || "http://localhost:5173",
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());
app.use("/api", apiRouter)

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

export default app;