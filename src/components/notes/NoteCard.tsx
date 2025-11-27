import type { Note } from '../../types/note';
import { Button } from '../ui/Button';

interface NoteCardProps {
  note: Note;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{note.title}</h3>
        <span className="text-sm text-gray-500">
          {formatDate(note.createdAt)}
        </span>
      </div>
      <p className="text-gray-600 mb-6 whitespace-pre-wrap">{note.content}</p>
      <div className="flex gap-2 justify-end">
        <Button variant="secondary" onClick={() => onEdit(note.id)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(note.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
