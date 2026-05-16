import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-stone-800 drop-shadow-sm font-serif">
        מחברת מחקר ביואינפורמטיקה
      </h1>
      <p className="text-lg md:text-2xl text-stone-700/80 font-medium max-w-md mx-auto">
        יומן מעבדה, תיעוד ניסויים וממצאים. חורף 1974.
      </p>
      <div className="mt-8 border-t-2 border-b-2 border-stone-800/20 py-4 w-full max-w-sm mx-auto">
        <p className="text-stone-800/60 font-mono text-sm tracking-widest uppercase" dir="ltr">
          Classified Information
        </p>
      </div>
      
      {/* Visual embellishments for vintage notebook */}
      <div className="absolute top-10 right-10 opacity-30 transform rotate-12 pointer-events-none">
        <div className="w-24 h-24 border-4 border-red-800/40 rounded-full flex items-center justify-center">
          <span className="text-red-800/40 font-bold text-xl uppercase tracking-widest rotate-[-15deg]">Top Secret</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;