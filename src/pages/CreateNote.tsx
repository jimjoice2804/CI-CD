import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteForm } from '../components/notes/NoteForm';
import { noteService } from '../services/noteService';
import type { CreateNoteInput } from '../types/note';

export const CreateNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateNoteInput) => {
    try {
      setIsLoading(true);
      setError(null);
      await noteService.create(data);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create note');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Note</h1>
        <p className="text-gray-500">Add a new note to your collection</p>
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          {error}
        </div>
      )}
      <NoteForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        submitLabel="Create Note"
      />
    </div>
  );
};
