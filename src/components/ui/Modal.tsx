export default function Modal({ rating, feedbackMessages, onClose, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-10 flex items-center justify-center z-10'>
      <div
        className='bg-slate-700 rounded-lg shadow-lg p-8 max-w-sm w-full text-center relative
                       transform transition-all duration-300 ease-out
                       scale-95 opacity-0 animate-fadeIn'
      >
        <h2 className='text-lg font-semibold mb-4'>Thank you!</h2>
        <p className='mt-6'>
          You rated us:
          <span className='font-bold capitalize'>
            {feedbackMessages[rating - 1]}
          </span>
        </p>
        <button
          onClick={onClose}
          className='px-4 mt-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition'
        >
          Close
        </button>
      </div>
    </div>
  );
}
