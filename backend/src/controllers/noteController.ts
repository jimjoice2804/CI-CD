import type { Request, Response } from "express";
import * as noteService from "../services/noteService.js";

export const createNote = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const createdNote = await noteService.createNoteService({ title, content });
        res.status(201).json(createdNote)
    } catch (error) {
        console.log("Something went wrong while creating note", error)
        res.status(500).json({ error: "failed to create note" })
    }
}

export const fetchNotes = async (req: Request, res: Response) => {
    try {
        const data = await noteService.fetchAllNotesService();
        res.status(200).json(data);
    } catch (error) {
        console.log("Something went wrong while fetching notes", error)
        res.status(500).json({ error: "failed to fetch note" })
    }
}

export const fetchNoteById = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return res.status(400).json({ message: "Missing note id" })
        const noteId = parseInt(req.params.id);
        const noteFetched = await noteService.fetchNoteByIdService(noteId)
        res.status(200).json(noteFetched)
    } catch (error) {
        console.log("Something went wrong while fetching note", error)
        res.status(500).json({ error: "failed to fetch note" })
    }
}

export const updateNote = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return res.status(400).json({ message: "Missing note id" })
        const noteId = parseInt(req.params.id);
        const { data
        } = req.body;
        const updatedNote = await noteService.updateNoteService(noteId, data);
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log("Something went wrong while updating note", error)
        res.status(500).json({ error: "failed to update note" })
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return res.status(400).json({ message: "Missing note id" })
        const noteId = parseInt(req.params.id);
        await noteService.deleteNoteService(noteId);
        res.status(200).json({
            message: `id ${noteId} of this note is has been deleted`
        })
    } catch (error) {
        console.log("Something went wrong while deleting note", error)
        res.status(500).json({ error: "failed to delete note" })
    }
}

export const healthzCheck = (req: Request, res: Response) => {
    res.status(200).json({ message: "Everything seems to be working fine" })
}