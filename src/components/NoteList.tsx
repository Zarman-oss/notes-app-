import Note from '@/components/ui/Note';
import type { Note as NoteType } from '@/types/Note';
export default function NoteList({
  notes,
  onDelete,
}: {
  notes: NoteType[];
  onDelete: (id: number | string) => void;
}) {
  return (
    <div className='mt-6 grid-3'>
      <Note notes={notes} onDelete={onDelete} />
    </div>
  );
}
