import express from "express";
import * as NotesController from "../controllers/notes.js";

const router = express.Router();

router.get("/notes", NotesController.getNotes);
router.get("/notes/:title", NotesController.getNoteByTitle);
router.post("/notes", NotesController.createNote);
router.delete("/notes/:title", NotesController.deleteNote);

// TODO: Add a route to update a note

export default router;
