import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 border-b-2 border-amber-400 flex flex-col items-center">
      <img
        src="https://placehold.co/120x50/0f172a/facc15?text=DCS&font=raleway"
        alt="Dutch Crew Support Logo"
        className="h-12 w-auto mb-4"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
        Dutch Crew Support
      </h1>
      <p className="text-slate-400 mt-1 text-sm">Professional Transport Services</p>
    </header>
  );
};

export default Header;
