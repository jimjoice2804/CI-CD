import { useState, useEffect, useCallback } from "react";
import { noteService } from "../services/noteService";
import type { Note } from "../types/note";

export const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNotes = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await noteService.getAll();
            setNotes(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch notes");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    return { notes, loading, error, refetch: fetchNotes };
};
