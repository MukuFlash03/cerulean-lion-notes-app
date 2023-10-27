import express from "express";
import * as NotesController from "../controllers/controller.js";

const router = express.Router();

router.get("/notes", NotesController.getNotes);
router.get("/notes/:title", NotesController.getNoteByTitle);
router.post("/notes", NotesController.createNote);
router.put("/notes/:title", NotesController.updateNote);
router.delete("/notes/:id", NotesController.deleteNote);

export default router;
