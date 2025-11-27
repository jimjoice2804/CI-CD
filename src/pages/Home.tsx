import { useNavigate } from 'react-router-dom';
import { useNotes } from '../hooks/useNotes';
import { NoteList } from '../components/notes/NoteList';
import { noteService } from '../services/noteService';

export const Home = () => {
  const { notes, loading, error, refetch } = useNotes();
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await noteService.delete(id);
        refetch();
      } catch {
        alert('Failed to delete note');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500 text-lg">Loading notes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600 mb-2">Error: {error}</p>
        <button
          onClick={refetch}
          className="text-red-700 font-medium hover:underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
        <p className="text-gray-500">{notes.length} note(s)</p>
      </div>
      <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
