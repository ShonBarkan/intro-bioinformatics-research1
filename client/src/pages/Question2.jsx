import React from 'react';
import { FileText, Video } from 'lucide-react';

const Question2 = () => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          מאיזה יצור (organism) מגיע חלבון המטרה? מהו שמו המדעי? האם יש לו שם עממי?
          אם יש שם עממי, מה מקורו?
        </p>
      </div>

      {/* Organism Nomenclature & Visuals Layout */}
      <div className="space-y-6 pt-2">
        
        {/* Top Row: Frog Image (Right) & Scientific Name (Left) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          
          {/* Right Side: Frog Visual Illustration */}
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <div className="max-w-xs w-full">
              <img 
                src="assets/Question2/theFrog.png" 
                alt="Xenopus laevis Illustration" 
                className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
              />
              {/* Native text caption below the blending image */}
              <div className="mt-2 text-center font-serif text-xs text-stone-600 italic flex items-center justify-center gap-1.5 select-none">
                <FileText size={12} />
                <span>איור 2.1: צפרדע רפואית אפריקאית</span>
              </div>
            </div>
          </div>

          {/* Left Side: Scientific Name & Generic Info */}
          <div className="md:col-span-3 space-y-1">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
              שם מדעי / Scientific Name
            </span>
            <h3 className="text-3xl font-serif italic font-semibold text-stone-950">
              Xenopus laevis
            </h3>
            <p className="text-base text-stone-600 italic">
              הסוג הוא Xenopus והמין הוא laevis
            </p>
          </div>

        </div>

        {/* Common Names Section (Simplified, right-aligned text flow) */}
        <div className="border-t border-stone-300/60 pt-6 space-y-2 text-xl text-stone-900 text-right">
          <p>
            <strong className="text-stone-700 font-semibold text-lg ml-2">שם עממי באנגלית:</strong> 
            <span className="font-mono text-stone-950 text-lg">African clawed frog</span>
          </p>
          <p>
            <strong className="text-stone-700 font-semibold text-lg ml-2">שם עממי בעברית:</strong> 
            צפרדע רפואית / צפרדע טופרית אפריקאית
          </p>
        </div>

      </div>

      {/* Structured Justifications & Text Sections (All uniformly styled) */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed pt-4">
        
        {/* Section 1: Etymology */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            מקור השם המדעי והעממי
          </h4>
          <p>
            השם האנגלי "African clawed frog" (והשם העברי החלופי "צפרדע טופרית") נובע ממאפיין מורפולוגי ייחודי של צפרדע זו – יש לה <strong>שלוש טפרים שחורים וחדים (claws)</strong> על שלוש האצבעות הפנימיות של רגליה האחוריות, המשמשים אותה לקריעת מזון ולחפירה בבוץ. 
            מאפיין זה משתקף גם בשם הסוג המדעי שלה, <span className="font-serif italic">Xenopus</span>, שמשמעותו ביוונית היא <strong>"רגל מוזרה"</strong> (<span className="font-serif text-sm">Xenos</span> = מוזר/זר, <span className="font-serif text-sm">Pous</span> = רגל).
          </p>
        </div>

        {/* Section 2: Medical & Research History */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            הקשר הרפואי והמחקרי
          </h4>
          <p>
            השם המקובל בעברית, <strong>"צפרדע רפואית"</strong>, מגיע מההיסטוריה שלה כבדיקת ההיריון האנושית הראשונה במאה ה-20 (בדיקת הוגבן), שבה הורמון ה-hCG בשתן של אישה בהיריון גרם לנקבת הצפרדע להטיל ביצים תוך פחות מ-24 שעות. 
            בעקבות כך היא הפכה לאחד מ<strong>יצורי המודל (Model organism)</strong> המרכזיים בביולוגיה ובביואינפורמטיקה.
          </p>
        </div>

        {/* Section 3: Invasive Species Status */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            סטטוס כמין פולש ואיסורים חוקיים
          </h4>
          <p>
            בעקבות השימוש ההמוני בה במעבדות ובתעשיית חיות המחמד, פרטים רבים נמלטו או שוחררו לטבע, והצפרדע ביססת את עצמה כ<strong>מין פולש (Invasive species)</strong> תוקפני והרסני במקומות רבים בעולם (כולל חלקים מארה"ב, אירופה, דרום אמריקה ואף בישראל). 
            היא ניזונה מכל הבא ליד, מתחרה עם דו-חיים מקומיים, ומהווה נשאית עמידה של פטריית הכיטריד (<span className="font-serif italic text-sm">Batrachochytrium dendrobatidis</span>) – פטרייה קטלנית שגרמה להכחדת אוכלוסיות שלמות של דו-חיים בעולם. בשל הסיכון האקולוגי הכבד הזה, ייבואה, החזקתה או סחר בה אסורים על פי חוק באזורים ומדינות רבות.
          </p>
        </div>

      </div>

      {/* Bottom Section: Embedded Video Layout */}
      <div className="pt-6 border-t border-stone-300/60 space-y-4">
        
        {/* Video Title Indicator */}
        <div className="flex items-center gap-2 text-stone-700">
          <Video size={20} className="text-red-600" />
          <h3 className="text-lg font-bold font-serif text-stone-900">
            הרחבה מעמיקה: היסטוריית המחקר הרפואי בצפרדע
          </h3>
        </div>
        
        {/* Video Embedding Card with Synchronized Caption */}
        <div className="max-w-3xl mx-auto bg-stone-100 p-3 rounded-lg border border-stone-300 shadow-sm">
          <div className="relative w-full aspect-video rounded overflow-hidden bg-black border border-stone-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PLmmb2f1fDk"
              title="TED-Ed: How a frog jumpstarted human pregnancy tests"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Integrated Figure Caption Below Video Player */}
          <div className="mt-3 pt-2 border-t border-stone-300/60 text-center font-serif text-xs text-stone-600 italic flex items-center justify-center gap-1.5 select-none">
            <FileText size={12} />
            <span>
              איור 2.2: סרטון TED-Ed קצר ומעמיק המסכם בצורה ויזואלית נפלאה את המסע המדעי של ה-<span className="italic">Xenopus laevis</span>.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Question2;