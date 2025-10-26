
import React from 'react';
import StarRating from './StarRating';

interface ReviewFormProps {
  rating: number;
  setRating: (rating: number) => void;
  comment: string;
  setComment: (comment: string) => void;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const ratingDescriptions: { [key: number]: string } = {
  1: 'Slecht',
  2: 'Matig',
  3: 'Goed',
  4: 'Zeer Goed',
  5: 'Uitstekend'
};

const ReviewForm: React.FC<ReviewFormProps> = ({
  rating,
  setRating,
  comment,
  setComment,
  isSubmitting,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-center text-lg font-medium text-slate-200 mb-4">
          Hoe was uw ervaring?
        </label>
        <StarRating rating={rating} setRating={setRating} />
        <p className="text-center text-amber-400 h-6 mt-2 font-medium">
          {rating > 0 && (ratingDescriptions[rating] || '')}
        </p>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-slate-300">
          Laat een opmerking achter (optioneel)
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          placeholder="Vertel ons meer over uw rit..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting || rating === 0}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-slate-900 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-amber-500 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:text-slate-400 transition-all duration-300"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verzenden...
            </div>
          ) : 'Review Versturen'}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
