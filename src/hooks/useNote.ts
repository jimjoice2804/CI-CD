import { useState, useEffect, useCallback } from "react";
import { noteService } from "../services/noteService";
import type { Note } from "../types/note";

export const useNote = (id: number | null) => {
    const [note, setNote] = useState<Note | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchNote = useCallback(async () => {
        if (!id) return;

        try {
            setLoading(true);
            setError(null);
            const data = await noteService.getById(id);
            setNote(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch note");
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchNote();
    }, [fetchNote]);

    return { note, loading, error, refetch: fetchNote };
};
