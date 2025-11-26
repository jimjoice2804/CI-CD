import express from "express"
import "dotenv/config";
import apiRouter from "./routers/index.js"

const app = express();

app.use(express.json());
app.use("/api", apiRouter)

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

export default app;

