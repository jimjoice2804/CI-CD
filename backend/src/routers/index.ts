import { Router } from "express";
import noteRouter from "./note.js";

const router = Router();

router.use("/notes", noteRouter);

export default router;