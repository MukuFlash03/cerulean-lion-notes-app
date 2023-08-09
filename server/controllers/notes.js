import Note from "../models/note.js";
import express from "express";

const router = express.Router();
// alternative to importing the Note model and express
// const express = require('express')
// const Note = require('./models/note')

// Get all notes
export const getNotes = router.get("/notes", (req, res) => {
  Note.find({})
    .then((notes) => {
      res.status(200).json(notes);
    })
    .catch((err) => {
      console.error("Error getting notes:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});

// Get a note by Title
export const getNoteByTitle = router.get("/notes/:title", (req, res) => {
  const title = req.params.title;
  Note.findOne({ title: title })
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json(note);
    })
    .catch((err) => {
      console.error("Error getting note:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});

// Create a new note
export const createNote = router.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });

  note
    .save({})
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error("Error creating note:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});

/* this route may or may not work this way or it might need to import models and express the way I've commented at the beginning of this file.*/

export const updateNote = router.put("/notes/:title", async (req, res) => {
  const title = req.query.title;
  const updateContent = req.body.content;

  try {
    const updatedNote = await Note.findOneAndUpdate(
      `${title}`,
      { content: updateContent },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      message: `Note ${title} updated with content: ${updateNote.updateContent}`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating your note" });
  }
});

// Delete a note
export const deleteNote = router.delete("/notes/:title", async (req, res) => {
  const { title } = req.params;
  Note.findOneAndDelete({ title: title })
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json({
        message: `Note title: '${note.title}' deleted successfully`,
      });
    })
    .catch((err) => {
      console.error("Error deleting note:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
});
