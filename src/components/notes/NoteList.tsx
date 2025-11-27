import { NoteCard } from './NoteCard';
import type { Note } from '../../types/note';

interface NoteListProps {
  notes: Note[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const NoteList = ({ notes, onEdit, onDelete }: NoteListProps) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-lg">
          📝 No notes yet. Create your first note!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
