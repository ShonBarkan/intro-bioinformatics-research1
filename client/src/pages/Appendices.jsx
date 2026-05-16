import React, { useState } from 'react';
import { Image, FileText, Info, X, Maximize2, Film } from 'lucide-react';

// Centralized asset mapping structured by project chapters including images, videos, and backgrounds
const APPENDIX_IMAGES = [
  {
    category: 'עיצוב כללי ומבנה המחברת',
    items: [
      {
        type: 'image',
        src: 'assets/background.png',
        title: 'איור 0.1: תמונת הרקע הסטטית של יומן המחקר',
        description: 'טקסטורת נייר הסטודיו הוינטג׳ המשמשת כרקע קבוע ואחיד לכל דפי המעבדה והגליונות בפרויקט.',
      }
    ]
  },
  {
    category: 'שאלה 1: פורטל UniProt ומסדי נתונים',
    items: [
      {
        type: 'image',
        src: 'assets/Question1/pic1.png',
        title: 'איור 1.1: השוואה בין הרשומה המבוקרת (Swiss-Prot) לרשומה האוטומטית בפורטל UniProt.',
        description: 'השוואה מקיפה בין רמות האפיון, השיוך המבני ומקורות המידע של רשומות מבוקרות לעומת רשומות המאונטטות חישובית.',
      }
    ]
  },
  {
    category: 'שאלה 2: הגדרת האורגניזם',
    items: [
      {
        type: 'image',
        src: 'assets/Question2/theFrog.png',
        title: 'איור 2.1: איור צפרדע רפואית אפריקאית',
        description: 'איור מורפולוגי של היצור Xenopus laevis המציג את הטפרים השחורות האופייניות ברגליה האחוריות.',
      }
    ]
  },
  {
    category: 'שאלה 4: אנוטציות ואתרי קישור ב-UniProt',
    items: [
      {
        type: 'image',
        src: 'assets/Question4/pic1.png',
        title: 'איור 4.1: תיוג אנוטציה תפקודית (By Similarity)',
        description: 'הוכחה מבוססת דמיון לרצפי מודל מאומתים במעבדה מתוך מאגר Swiss-Prot.',
      },
      {
        type: 'image',
        src: 'assets/Question4/pic2.png',
        title: 'איור 4.2: מערכת החוקים PROSITE-ProRule',
        description: 'שיוך ומיפוי אוטומטי של אתרים פונקציונליים על סמך מוטיבים שמורים ברצף.',
      },
      {
        type: 'image',
        src: 'assets/Question4/pic3.png',
        title: 'איור 4.3: מיפוי שאריות האתר הפעיל (Features)',
        description: 'טבלת מיקומי חומצות האמינו האחראיות על קישור הסובסטרט והפעילות האנזימטית.',
      },
      {
        type: 'image',
        src: 'assets/Question4/pic4.png',
        title: 'איור 4.4: סיווג מונחי GO (Gene Ontology)',
        description: 'חלוקת התפקידים המולקולריים והתהליכים הביולוגיים של האנזים בתא.',
      }
    ]
  },
  {
    category: 'שאלה 5: חיפוש וסינון הומולוגים ב-BLAST',
    items: [
      {
        type: 'image',
        src: 'assets/Question5/pic1.png',
        title: 'איור 5.1: פלט תוצאות מסונן ב-BLAST',
        description: 'תצלום מסך של רשימת ההומולוגים המבוקרים לאחר הפעלת מסנני אפיון ניסויי ומבני.',
      }
    ]
  },
  {
    category: 'שאלה 9: מבנה תלת-ממדי ואפיון האתר הפעיל',
    items: [
      {
        type: 'video',
        src: 'assets/Question9/סרטון של החלבון שלנו.mp4',
        title: 'איור 9.1: הדמיה תלת-ממדית מתוך תוכנת SPDBV',
        description: 'הדמיה תלת-ממדית מתוך תוכנת SPDBV המציגה את מבנה חבית ה-TIM, שרשרת A מבודדת (מבנה סרט), ארבעת השיירים הפונקציונליים המודגשים, והליגנד PGA (בירוק) קשור במרכז האתר הפעיל.',
      }
    ]
  }
];

const Appendices = () => {
  // State hook to manage the active previewed image inside the modal overlay
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="space-y-8 pb-12 text-right select-none">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-2 text-right">
        <h2 className="text-3xl font-bold text-black font-serif flex items-center gap-2">
          <Image size={28} className="text-stone-800" />
          נספחים: ארכיון תמונות ואיורי המחקר
        </h2>
        <p className="text-stone-700 text-lg">
          ריכוז מלא ומיושר של כלל הממצאים הויזואליים, תצלומי המסך והאיורים המבניים שנאספו לאורך שלבי פרויקט הביואינפורמטיקה.
        </p>
      </div>

      {/* Iterating through categories */}
      <div className="space-y-10">
        {APPENDIX_IMAGES.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-4">
            
            {/* Section Category Title */}
            <h3 className="text-xl font-bold text-stone-900 border-b border-stone-300/80 pb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-700 inline-block"></span>
              {section.category}
            </h3>

            {/* Content Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-stone-100/60 border border-stone-300/70 rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow transition-shadow"
                >
                  {/* Conditional rendering based on item type (image or video) */}
                  {item.type === 'image' ? (
                    <div 
                      onClick={() => setActiveImage(item)}
                      className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/40 cursor-zoom-in group"
                    >
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.03]"
                      />
                      {/* Image Hover Zoom Overlay Hint */}
                      <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/5 flex items-center justify-center transition-all duration-300">
                        <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                      </div>
                    </div>
                  ) : (
                    /* Video Component Render Block */
                    <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-stone-300/60 shadow-inner">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        src={item.src}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Caption & Description Section */}
                  <div className="mt-3 space-y-1.5 text-right">
                    <h5 className="font-serif text-sm font-bold text-black flex items-center gap-1.5 select-none">
                      {item.type === 'video' ? <Film size={14} className="text-amber-700" /> : <FileText size={14} className="text-stone-600" />}
                      {item.title}
                    </h5>
                    <p className="text-xs text-stone-800 leading-relaxed bg-white/70 p-2 rounded border border-stone-200/60 flex items-start gap-1.5">
                      <Info size={12} className="text-stone-500 shrink-0 mt-0.5" />
                      <span>{item.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Full-Screen Interactive Lightbox Modal for Enlarged Previews */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex flex-col items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          {/* Close Action Button */}
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close Preview"
          >
            <X size={24} />
          </button>

          {/* Modal Container Body */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[80vh] w-full bg-stone-900 p-2 rounded-lg border border-stone-700 shadow-2xl flex items-center justify-center cursor-default"
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
          </div>

          {/* Persistent Meta Title at the bottom of viewport */}
          <div className="mt-4 max-w-2xl text-center px-4">
            <h4 className="text-white text-base font-serif font-bold">{activeImage.title}</h4>
          </div>
        </div>
      )}

    </div>
  );
};

export default Appendices;