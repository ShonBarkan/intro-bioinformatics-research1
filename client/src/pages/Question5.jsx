import React from 'react';
import { FileText, ExternalLink, Activity, Layers, BarChart3, Filter } from 'lucide-react';

const Question5 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3 text-right">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          מצאו הומולוג מתאים של חלבון המטרה, שעומד בתנאים הבאים:
        </p>
        
        {/* Numbered list for selection criteria - resized to text-lg */}
        <ol className="list-decimal pr-6 text-stone-900 text-lg font-medium leading-relaxed space-y-1">
          <li>ערך הציפיה שלו (E-value) קטן מ-0.001.</li>
          <li>התפקיד שלו אופיין באופן ניסויי. כלומר כזה שהסעיף Function שלו מפורט ומגובה בפרסומים מדעיים.</li>
          <li>המבנה תלת-ממדי שלו נקבע באופן ניסויי.</li>
        </ol>

        {/* Bulleted list for sub-questions - resized to text-lg with separator removed */}
        <ul className="list-disc pr-6 text-stone-900 text-lg font-semibold leading-relaxed space-y-1 pt-1">
          <li>מהם אחוזי הזהות בין חלבון המטרה וההומולוג?</li>
          <li>מהו ערך הציפיה (E-value) של ההומולוג? מה ניתן ללמוד ממנו.</li>
          <li>מהי מידת הכיסוי, של שני החלבונים, על ידי העמדת הרצפים של BLAST.</li>
        </ul>
      </div>

      {/* Selected Homolog Banner */}
      <div className="space-y-2">
        <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
          ההומולוג הנבחר / Selected Characterized Homolog
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-950">
          P60174 · TPIS_HUMAN
        </h3>
        <a 
          href="https://www.uniprot.org/uniprotkb/P60174/entry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-stone-800 transition-colors pt-1"
          dir="ltr"
        >
          <ExternalLink size={14} />
          <span>https://www.uniprot.org/uniprotkb/P60174/entry</span>
        </a>
      </div>

      {/* Methodology Pipeline (Structured Steps) */}
      <div className="space-y-4 pt-2">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          <Filter size={18} className="text-stone-600" />
          מתודולוגיית העבודה ושלבי הסינון ב-BLAST
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          כדי למצוא הומולוג מתאים לחלבון המטרה שלנו שעונה על כל דרישות הניסוי והמבנה, הרצנו חיפוש BLAST ופעלנו לפי שלושה שלבי סינון מוגדרים:
        </p>

        {/* Vertical Pipeline Container */}
        <div className="space-y-4 pr-2">
          
          {/* Step 1 */}
          <div className="flex gap-4 items-start">
            <div className="bg-stone-800 text-stone-100 font-mono text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1 shadow-sm">
              1
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-950 text-base">סינון לפי רמת בקרה (Status)</h5>
              <p className="text-stone-800 text-base leading-relaxed">
                מתוך 1,000 תוצאות החיפוש שקיבלנו, השתמשנו באופציית הסינון שבתפריט הצדדי ובחרנו ברשומות מבוקרות בלבד (Reviewed / Swiss-Prot). שלב זה צמצם לנו מיד את הרשימה מ-1,000 אפשרויות ל-24 חלבונים מבוקרים בלבד – כאלו שאופיינו במעבדה באופן ניסויי ויש להם מבנה תלת-ממדי פתור.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start">
            <div className="bg-stone-800 text-stone-100 font-mono text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1 shadow-sm">
              2
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-950 text-base">בחירת יצור מודל פופולרי</h5>
              <p className="text-stone-800 text-base leading-relaxed">
                מתוך 24 האפשרויות המבוקרות, ניגשנו לרשימת האורגניזמים הפופולריים ובחרנו בחלבון של האדם (Homo sapiens, מספר רשומה P60174), בהתאם להמלצה בהנחיות העבודה להתמקד ביצורי מודל נחקרים.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start">
            <div className="bg-stone-800 text-stone-100 font-mono text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1 shadow-sm">
              3
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-950 text-base">וידוא מובהקות</h5>
              <p className="text-stone-800 text-base leading-relaxed">
                לבסוף הבחנו כי ערך הציפייה (E-value) של חלבון האדם מול חלבון המטרה שלנו הוא נמוך ביותר, ועומד על רף השואף לחלוטין לאפס, מה שהבטיח לנו מעל לכל ספק שמדובר בהומולוג מובהק ואמיתי.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Alignment Metrics Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-stone-300/60 py-6 my-2">
        
        {/* Metric 1: Identity */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <Activity size={18} className="text-amber-700" />
            <h5>אחוז זהות (Identity)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">83.9%</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            על פי תוצאות העמדת הרצפים ב-BLAST, אחוז Identity גבוה מאוד המעיד על דמיון מבני רב בין השניים.
          </p>
        </div>

        {/* Metric 2: E-value */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <BarChart3 size={18} className="text-amber-700" />
            <h5>ערך הציפייה (E-value)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">8.5×10⁻¹⁵²</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            ערך קטן בצורה קיצונית ומשמעותית מהרף המבוקש במחקר (0.001).
          </p>
        </div>

        {/* Metric 3: Coverage */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <Layers size={18} className="text-amber-700" />
            <h5>מידת הכיסוי (Coverage)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">100%</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            גרף הכיסוי מראה כי העמדת הרצפים של ה-BLAST מתפרסת במלואה לאורך כל הרצף מתחילתו ועד סופו.
          </p>
        </div>

      </div>

      {/* Detailed Statistical Interpretation Content */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed pt-2">
        
        {/* Section 1: E-value Meaning Analysis */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            ניתוח ערך הציפייה (E-value) ומשמעותו המדעית
          </h4>
          <p>
            ערך הציפייה של ההומולוג שנבחר הוא <span className="font-mono bg-stone-200 px-1 rounded text-base">8.5 × 10⁻¹⁵²</span>. ערך זה קטן בצורה משמעותית מהרף שנקבע בעבודה (0.001). המשמעות היא שההסתברות שהדמיון הגבוה בין שני החלבונים הללו קרה במקרה (בשל צירוף מקרים אקראי בבסיס הנתונים) היא אפסית לחלוטין. 
          </p>
          <p>
            מכך אנו לומדים בביטחון מלא ששני החלבונים הללו חולקים אב קדמון משותף, ולכן הם הומולוגים אמיתיים – דבר המצדיק לחלוטין את היכולת שלנו להשליך מהמידע הניסיוני של האדם על חלבון המטרה שלנו.
          </p>
        </div>

        {/* Section 2: Coverage & Sequence Length Details */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            ניתוח מידת הכיסוי והשוואת אורך הרצפים
          </h4>
          <p>
            מידת הכיסוי של העמדת הרצפים היא מלאה (100%). למרות קיומו של הבדל קטן באורך הכולל של החלבונים (חלבון המטרה שלנו מהצפרדע הוא באורך של 248 חומצות אמינו, בעוד חלבון האדם הוא באורך של 249 חומצות אמינו), גרף הכיסוי של BLAST מראה שההעמדה מתפרסת לאורך כל הרצף מתחילתו ועד סופו. 
          </p>
          <p>
            הנתון המלא הזה מלמד אותנו שהחלבון לא עבר הוספות (Insertions) או מחיקות (Deletions) משמעותיות במהלך ההיסטוריה האבולוציונית שלו, מה שמחזק את הטענה שהמבנה השתמר בצורה מיוצבת היטב.
          </p>
        </div>

      </div>

      {/* Visual Evidence Section (BLAST Filtered Screen Shot) */}
      <div className="pt-6 border-t border-stone-300/60">
        <div className="max-w-2xl">
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            <img 
              src="assets/Question5/pic1.png" 
              alt="BLAST Results Filtered Screen" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
            />
          </div>
          {/* Right-aligned figure caption using uniform styling */}
          <div className="mt-2 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>איור 5.1: תצלום מסך של פלט תוצאות ה-BLAST בפורטל UniProt לאחר הפעלת מסנני האפיון הניסויי והמבני.</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Question5;