
import React from 'react';

const ThankYouMessage: React.FC = () => {
  return (
    <div className="text-center py-10 px-4">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Bedankt voor uw feedback!</h2>
      <p className="text-slate-300">
        We waarderen het dat u de tijd heeft genomen om ons te helpen verbeteren.
        Wij wensen u een prettige dag.
      </p>
    </div>
  );
};

export default ThankYouMessage;
