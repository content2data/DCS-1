
import React, { useState } from 'react';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import ThankYouMessage from './components/ThankYouMessage';

const App: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a star rating before submitting.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    console.log('Submitting review:', { rating, comment });
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mx-auto bg-slate-800 rounded-2xl shadow-2xl shadow-slate-950/50 overflow-hidden">
        <Header />
        <main className="p-6 md:p-8">
          {isSubmitted ? (
            <ThankYouMessage />
          ) : (
            <ReviewForm
              rating={rating}
              setRating={setRating}
              comment={comment}
              setComment={setComment}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
            />
          )}
        </main>
      </div>
       <footer className="text-center mt-8 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dutch Crew Support. All Rights Reserved.</p>
          <p>www.dutchcrewsupport.com</p>
        </footer>
    </div>
  );
};

export default App;
