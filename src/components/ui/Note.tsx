import { LucideTrash } from 'lucide-react';

export default function Note({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className='relative bg-yellow-100 text-dark p-4 rounded-lg border border-yellow-200'
        >
          {/* Fake pin effect */}
          <span className='absolute -top-1 left-4 w-3 h-3 bg-danger rounded-full shadow-md'></span>

          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm-fluid rounded-full h-6 w-6 flex justify-center items-center bg-neutral font-semibold text-dark'>
              {note.id}
            </span>
            <div />
            <div className='flex items-center justify-end'>
              <span
                className={`px-2 py-0.5 text-sm-fluid rounded-full font-medium ${
                  note.priority === 'High'
                    ? 'bg-red-500 text-dark uppercase text-sm-fluid'
                    : note.priority === 'Medium'
                    ? 'bg-yellow-500 text-dark uppercase text-sm-fluid'
                    : 'bg-green-500 text-dark uppercase text-sm-fluid'
                }`}
              >
                {note.priority}
              </span>
              <button>
                <LucideTrash
                  stroke='red'
                  className='stroke-red-500 hover:scale-110 transition-transform cursor-pointer'
                />
              </button>
            </div>
          </div>

          <p className='text-base-fluid leading-relaxed font-medium'>
            {note.description}
          </p>
        </div>
      ))}
    </>
  );
}
