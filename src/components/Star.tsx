import { Star as StarIcon } from 'lucide-react';

export default function Star({
  star,
  rating,
  hover,
  ratingClick,
  hoverEnter,
  hoverLeave,
}: {
  star: number;
  rating: number;
  hover: number;
  ratingClick: (star: number) => void;
  hoverEnter: (star: number) => void;
  hoverLeave: (star: number) => void;
}) {
  const isActive = star <= (hover || rating);

  return (
    <span
      className='cursor-pointer'
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={hoverLeave}
      key={star}
      role='button'
      aria-label={`Rate ${star} stars`}
    >
      <StarIcon
        className={
          isActive ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }
      />
    </span>
  );
}
