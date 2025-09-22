type Note = {
  id: number | string;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
};

import Note from '@/components/ui/Note';
export default function NoteList({ notes }: { notes: Note[] }) {
  return (
    <div className='mt-6 grid-auto'>
      <Note notes={notes} />
    </div>
  );
}
