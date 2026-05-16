import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 relative">
      
      {/* Ben-Gurion University Logo */}
      <div className="w-20 h-20 md:w-24 md:h-24 mb-2">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ddlL4AV-qkZhVhILEaNzd0VM8FNJ97yNiA&s" 
          alt="Ben-Gurion University Logo" 
          className="w-full h-auto block opacity-90 mix-blend-multiply"
        />
      </div>

      {/* Main Course Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-sm font-serif">
        מבוא לביואינפורמטיקה 1
      </h1>
      
      {/* Team Specification */}
      <p className="text-xl md:text-2xl text-stone-950 font-bold">
        צוות מספר 3
      </p>

      {/* Authors & Lecturer Info */}
      <div className="space-y-1">
        <p className="text-lg text-stone-900 font-semibold">
          מגישים: נועם מרקוס ושון ברקן
        </p>
        <p className="text-lg text-stone-900 font-semibold">
          מרצה: חן קיסר
        </p>
      </div>

      {/* Vintage Classified Divider */}
      <div className="mt-4 border-t-2 border-b-2 border-stone-800/30 py-3 w-full max-w-md mx-auto">
        <p className="text-stone-950 font-mono text-xs font-bold tracking-widest uppercase" dir="ltr">
          Research Log
        </p>
      </div>

      {/* Selected Sequence Container */}
      <div className="w-full max-w-xl mx-auto bg-stone-100/80 p-4 rounded-lg border border-stone-300/80 text-right space-y-2 mt-2 shadow-sm">
        <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
          רצף נבחר / Selected Sequence
        </span>
        <p className="font-mono text-xs md:text-sm text-black font-medium break-all bg-white p-3 rounded border border-stone-200 leading-relaxed tracking-wider text-left" dir="ltr">
          MSPRKFFVGGNWKMNGDKKSLGELINTLNSGKMNADTEVVCGAPAIYLDFARQKLDAKIALSAQNCYKVAKGAFTGEISPAMIKDCGATWVILGHSERRHVFGECDELIGQKVAHALSEGIGVIACIGEKLDQREAGITEKVVFEQTKAIADNVKDWSKVVLAYEPVWAIGTGKTATPEQAQEVHKKLREWVKTNVSEGVAQSVRIIYGGSVTGGTCRELAGQPDIDGFLVGGASLKPEFIEIINAKH
        </p>
      </div>
      
      {/* Cover Illustration Image Container */}
      <div className="pt-4 max-w-xl w-full mx-auto">
        <div className="relative w-full rounded overflow-hidden border border-stone-300 shadow-sm">
          <img 
            src="assets/background.png" 
            alt="Cover Illustration" 
            className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
          />
        </div>
        <div className="mt-2 text-right font-serif text-xs text-stone-600 italic select-none pr-1">
          <span>איור 0.1: איור שער פרויקט המחקר.</span>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;