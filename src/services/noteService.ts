import type { Note, CreateNoteInput, UpdateNoteInput } from "../types/note";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const noteService = {
    getAll: async (): Promise<Note[]> => {
        const res = await fetch(`${API_URL}/notes`);
        if (!res.ok) throw new Error("Failed to fetch notes");
        return res.json();
    },

    getById: async (id: number): Promise<Note> => {
        const res = await fetch(`${API_URL}/notes/${id}`);
        if (!res.ok) throw new Error("Failed to fetch note");
        return res.json();
    },

    create: async (data: CreateNoteInput): Promise<Note> => {
        const res = await fetch(`${API_URL}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to create note");
        return res.json();
    },

    update: async (id: number, data: UpdateNoteInput): Promise<Note> => {
        const res = await fetch(`${API_URL}/notes/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to update note");
        return res.json();
    },

    delete: async (id: number): Promise<void> => {
        const res = await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete note");
    },
};
