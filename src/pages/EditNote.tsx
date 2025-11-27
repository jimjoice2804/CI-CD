import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NoteForm } from '../components/notes/NoteForm';
import { useNote } from '../hooks/useNote';
import { noteService } from '../services/noteService';
import type { CreateNoteInput } from '../types/note';

export const EditNote = () => {
  const { id } = useParams<{ id: string }>();
  const noteId = id ? parseInt(id, 10) : null;
  const { note, loading, error: fetchError } = useNote(noteId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateNoteInput) => {
    if (!noteId) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await noteService.update(noteId, data);
      navigate('/');
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Failed to update note'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500 text-lg">Loading note...</p>
      </div>
    );
  }

  if (fetchError || !note) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600 mb-2">
          Error: {fetchError || 'Note not found'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="text-red-700 font-medium hover:underline"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Note</h1>
        <p className="text-gray-500">Update your note details</p>
      </div>
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          {submitError}
        </div>
      )}
      <NoteForm
        initialData={note}
        onSubmit={handleSubmit}
        isLoading={isSubmitting}
        submitLabel="Update Note"
      />
    </div>
  );
};
