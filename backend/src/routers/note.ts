import { Router } from "express";
import * as noteController from "../controllers/noteController.js";

const router = Router();

router.get("/", noteController.fetchNotes);
router.get("/:id", noteController.fetchNoteById);
router.post("/", noteController.createNote);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

router.get("/check/healthz", noteController.healthzCheck);


export default router;