import { useState } from 'react';

export default function NoteForm() {
  const [formData, setFormData] = useState({
    title,
    category,
    priority,
    description,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return alert('Please enter a title');
    console.log({ title, priority });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='wrapper mt-12 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-5'
    >
      <div className='space-y-2'>
        <label
          htmlFor='title'
          className='block text-base-fluid font-medium text-zinc-700 dark:text-zinc-300'
        >
          Title
        </label>
        <input
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
          className='input'
          id='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
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
          className='input'
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='High'>🏢 Work</option>
          <option value='Medium'>💻Personal</option>
          <option value='Low'>💡Ideas</option>
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
          className='input'
          id='description'
          value={description}
          placeholder='Enter Description'
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button type='submit' className='btn btn-primary w-full'>
        Save Note
      </button>
    </form>
  );
}
