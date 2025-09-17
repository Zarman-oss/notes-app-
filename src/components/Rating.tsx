import { useState } from 'react';

import Modal from '@/components/Modal';
import Star from '@/components/Star';

export default function Rating({ heading }: { heading: string }) {
  const stars = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const feedbackMessages = ['poor', 'fair', 'good', 'very good', 'excellent'];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className='card container text-center p-2 m-5 mt-8 flex flex-col gap-4 items-center justify-center'>
      <h2>{heading}</h2>

      <div className='flex items-center justify-center gap-2'>
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            hoverEnter={setHover}
            ratingClick={setRating}
            hoverLeave={() => setHover(0)}
          />
        ))}
      </div>

      {rating > 0 && (
        <p className='uppercase text-2xl'>{feedbackMessages[rating - 1]}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={rating === 0}
        className={`p-3 transition ${
          rating === 0
            ? 'opacity-50 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        Submit
      </button>

      {/* Modal */}
      {submitted && (
        <Modal
          rating={rating}
          onClose={closeModal}
          isOpen={submitted}
          feedbackMessages={feedbackMessages}
        />
      )}
    </div>
  );
}
