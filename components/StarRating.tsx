
import React, { useState } from 'react';
import Star from './Star';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  return (
    <div className="flex justify-center items-center space-x-2">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          type="button"
          key={starIndex}
          onClick={() => setRating(starIndex)}
          onMouseEnter={() => setHoverRating(starIndex)}
          onMouseLeave={() => setHoverRating(0)}
          className="focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full p-1"
          aria-label={`Rate ${starIndex} out of 5 stars`}
        >
          <Star 
            isFilled={starIndex <= (hoverRating || rating)} 
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
