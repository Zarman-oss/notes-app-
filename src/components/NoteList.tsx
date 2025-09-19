export default function NoteList({ notes }) {
  return (
    <div className='mt-6 grid-auto'>
      {notes.map((note) => (
        <div
          key={note.id}
          className='relative bg-yellow-100 text-dark p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-yellow-200'
        >
          {/* Fake pin effect */}
          <span className='absolute -top-1 left-4 w-3 h-3 bg-danger rounded-full shadow-md'></span>

          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm-fluid font-semibold text-zinc-500'>
              #{note.id}
            </span>
            <span
              className={`px-2 py-0.5 text-sm-fluid rounded-full font-medium
              ${
                note.priority === 'high'
                  ? 'bg-red-500/20 text-red-700'
                  : note.priority === 'medium'
                  ? 'bg-yellow-500/20 text-yellow-700'
                  : 'bg-green-500/20 text-green-700'
              }`}
            >
              {note.priority}
            </span>
          </div>

          <p className='text-base-fluid leading-relaxed font-medium'>
            {note.description}
          </p>
        </div>
      ))}
    </div>
  );
}
