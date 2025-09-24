import NoteList from '@/components/NoteList';
import IndigoBtn from '@/components/ui/IndigoBtn';
import SecondaryBtn from '@/components/ui/SecondaryBtn';
import Toast from '@/components/ui/Toast';
import { Plus, ThumbsUp, X } from 'lucide-react';
import { useState, useEffect } from 'react';

type ToastData = {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
} | null;

export default function NoteForm() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    priority: '',
    description: '',
  });

  const [toast, setToast] = useState<ToastData>(null);
  const [idCounter, setIdCounter] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title) {
      setToast({ message: 'Please enter a title', type: 'error' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    if (!formData.description) {
      setToast({ message: 'Please enter a description', type: 'error' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    const newNote = { id: idCounter, ...formData };

    setNotes([newNote, ...notes]);

    setIdCounter(idCounter + 1);

    setFormData({
      title: '',
      category: '',
      priority: '',
      description: '',
    });

    setToast({ message: 'Note saved successfully!', type: 'success' });
    setTimeout(() => setToast(null), 3000);

    setShowForm(false);
  };

  const handleDelete = (id: number | string) => {
    setNotes(notes.filter((note) => note.id !== id));
    setToast({ message: 'Note deleted', type: 'info' });
  };

  return (
    <div className='input-wrapper relative'>
      {/* Show Add Note button if no form */}

      {!showForm && (
        <div className='mt-4'>
          {notes.length === 0 && (
            <p className='text-neutral text-sm-fluid mb-3'>
              No notes have been added yet — go ahead and add what you’ve been
              thinking.
            </p>
          )}
          <div className='flex items-center justify-center sm:justify-start'>
            <SecondaryBtn
              icon={Plus}
              text='Add Note'
              onClick={() => setShowForm(true)}
            />
          </div>
          <NoteList notes={notes} onDelete={handleDelete} />
        </div>
      )}

      {/* Show form when active */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className='wrapper mt-8 p-6 rounded-xl border border-zinc-200
                     dark:border-zinc-800 bg-white dark:bg-zinc-900
                     shadow-sm space-y-5'
        >
          <div className='space-y-2'>
            <label
              htmlFor='title'
              className='block text-base-fluid font-medium text-zinc-700 dark:text-zinc-300'
            >
              Title
            </label>
            <input
              name='title'
              className='input'
              id='title'
              value={formData.title}
              type='text'
              placeholder='e.g. Meeting notes'
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='priority'
              className='block text-base-fluid font-medium text-zinc-700 dark:text-zinc-300'
            >
              Priority
            </label>
            <select
              name='priority'
              className='input'
              id='priority'
              value={formData.priority}
              onChange={handleChange}
            >
              <option value=''>Select Priority</option>
              <option value='High'>🔴 High</option>
              <option value='Medium'>🟡 Medium</option>
              <option value='Low'>🟢 Low</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='category'
              className='block text-base-fluid font-medium text-zinc-700 dark:text-zinc-300'
            >
              Category
            </label>
            <select
              name='category'
              className='input'
              id='category'
              value={formData.category}
              onChange={handleChange}
            >
              <option value='Work'>🏢 Work</option>
              <option value='Personal'>💻 Personal</option>
              <option value='Ideas'>💡 Ideas</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='description'
              className='block text-base-fluid font-medium text-zinc-700 dark:text-zinc-300'
            >
              Description
            </label>
            <textarea
              name='description'
              className='input'
              id='description'
              value={formData.description}
              placeholder='Enter Description'
              onChange={handleChange}
            ></textarea>
          </div>

          <div className='flex gap-3 items-center'>
            <IndigoBtn
              text='Save Note'
              icon={ThumbsUp}
              type='submit'
              className='btn-indigo-purple-pink flex-1 flex items-center justify-center'
            />
            <SecondaryBtn
              text='Cancel'
              icon={X}
              onClick={() => setShowForm(false)}
            />
          </div>
        </form>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
