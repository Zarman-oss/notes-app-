import NoteForm from '@/components/NoteForm';
import { LucideNotebookPen } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className='wrapper mt-12'>
      <div className='flex items-center justify-center gap-2'>
        <LucideNotebookPen width={42} height={42} />
        <h1 className='text-3xl-fluid font-bold text-neutral'>Notes App</h1>
      </div>
      <NoteForm />
    </div>
  );
}

export default App;
