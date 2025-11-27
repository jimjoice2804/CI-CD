export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateNoteInput = Pick<Note, "title" | "content">;
export type UpdateNoteInput = Partial<CreateNoteInput>;
