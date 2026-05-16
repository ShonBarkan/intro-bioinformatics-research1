import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const Question4 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          האם קיים מידע על התפקיד (פונקציה) של חלבון המטרה? אם כן, על מה הוא מבוסס? האם על ניסוי? הומולגיה?
        </p>
      </div>

      {/* Section 1: Methodological Basis of Knowledge */}
      <div className="space-y-4">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          ביסוס המידע הפונקציונלי (הומולגיה מול ניסוי)
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          כן, קיים מידע מפורט על התפקיד של חלבון המטרה שלנו, אך הוא <strong>אינו מבוסס על ניסוי ישיר</strong> שנערך על חלבון ספציפי זה, אלא מבוסס לחלוטין על <strong>הומולוגיה ואנוטציות חישוביות מוצלבות</strong>. 
          ניתן לראות זאת בבירור על פי תגיות המקור (Evidence) המצורפות לכל קביעה פונקציונלית בדף ה-UniProt:
        </p>

        {/* Evidence Tag 1 */}
        <div className="space-y-2 pt-2">
          <p className="text-stone-800 text-lg leading-relaxed">
            <span className="font-mono bg-amber-200/60 px-1.5 py-0.5 rounded text-stone-950 font-medium text-base ml-2">"By Similarity"</span>: 
            תגית זו מופיעה לצד תיאור התפקיד הכללי והפעילות הקטליטית. משמעותה היא שהתפקיד מיוחס לחלבון זה על סמך הדמיון הגבוה ברצף (הומולוגיה) לחלבונים זהים ביצורים אחרים אשר כן אופיינו ואומתו באופן ניסויי במעבדה. 
            במקרה זה, האנוטציה נשענת על האנזים המקביל בארנבת:
          </p>
          <a 
            href="https://www.uniprot.org/uniprotkb/P00939/entry" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-stone-800 transition-colors"
            dir="ltr"
          >
            <ExternalLink size={14} />
            <span>P00939 · TPIS_RABIT</span>
          </a>
        </div>

        {/* Image 1: By Similarity Evidence Screenshot */}
        <div className="pt-2 max-w-2xl">
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            <img 
              src="assets/Question4/pic1.png" 
              alt="UniProt By Similarity Evidence" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
            />
          </div>
          <div className="mt-2 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>איור 4.1: תיוג אנוטציה תפקודית על סמך דמיון לחלבוני מודל מבוקרים (By Similarity).</span>
          </div>
        </div>

        {/* Evidence Tag 2 */}
        <div className="space-y-2 pt-4">
          <p className="text-stone-800 text-lg leading-relaxed">
            <span className="font-mono bg-amber-200/60 px-1.5 py-0.5 rounded text-stone-950 font-medium text-base ml-2">"PROSITE-ProRule Annotation"</span>: 
            תגית זו מופיעה לצד האתרים הפעילים ואתרי הקישור של האנזים. היא מעידה על אנוטציה אוטומטית המבוססת על חוקים מבניים ופונקציונליים מוגדרים מראש – המערכת זיהתה מוטיבים שמורים מאוד ברצף, ועל פיהם קבעה חישובית את מיקומי האתרים:
          </p>
          <a 
            href="https://prosite.expasy.org/rule/PRU10127" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-stone-800 transition-colors"
            dir="ltr"
          >
            <ExternalLink size={14} />
            <span>ProRule PRU10127</span>
          </a>
        </div>

        {/* Image 2: PROSITE-ProRule Annotation Screenshot */}
        <div className="pt-2 max-w-2xl">
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            <img 
              src="assets/Question4/pic2.png" 
              alt="UniProt PROSITE-ProRule Annotation" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
            />
          </div>
          <div className="mt-2 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>איור 4.2: שיוך אתרים תפקודיים ברצף באמצעות מערכת החוקים האוטומטית PROSITE-ProRule.</span>
          </div>
        </div>

      </div>

      {/* Section 2: Functional Details & Critical Residues */}
      <div className="space-y-4 pt-4 border-t border-stone-300/60">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          פירוט הפעילות התפקודית של האנזים
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          החלבון מזוהה כאנזים מטבולי בשם <strong>טריוז פוספאט איזומראז (Triosephosphate isomerase)</strong>, הממלא תפקיד מרכזי בשני מסלולים מטבוליים תאיים חיוניים ביותר: הפקת אנרגיה (<strong>גליקוליזה</strong>) ויצירת סוכר מחדש (<strong>גלוקונאוגנזה</strong>).
        </p>

        <ul className="list-disc pr-6 space-y-2 text-stone-800 text-lg">
          <li>
            <strong className="text-stone-950 font-semibold">הפעילות המרכזית:</strong> האנזים מזרז באופן יעיל את הפיכת הגומלין (Isomerization) בין שני סוכרים מזורחנים: Dihydroxyacetone phosphate (DHAP) לבין D-glyceraldehyde-3-phosphate (G3P).
          </li>
          <li>
            <strong className="text-stone-950 font-semibold">פעילות משנית (תוצר לוואי קטליטי):</strong> האנזים אחראי גם לייצור של Methylglyoxal – תוצר לוואי ציטוטוקסי (רעיל לתא) אשר עלול לשנות בצורה לא מבוקרת ולפגוע במבנה של חלבונים, DNA וליפידים בתא.
          </li>
          <li>
            <strong className="text-stone-950 font-semibold">שאריות פונקציונליות (Functional Residues):</strong> על פי הניתוח החישובי, אופיינו אתרי הקישור והאתר הפעיל המדויקים לאורך רצף חומצות האמינו של האנזים:
            <ul className="list-circle pr-6 mt-1 space-y-1 text-base text-stone-700">
              <li>אתרי קישור לסובסטרט (Substrate Binding): בעמדות <span className="font-mono font-bold text-stone-900">11</span> ו-<span className="font-mono font-bold text-stone-900">13</span>.</li>
              <li>אתר פעיל המשמש כאלקטרופיל (Active Site / Electrophile): בעמדה <span className="font-mono font-bold text-stone-900">95</span>.</li>
              <li>אתר פעיל המשמש כקולט פרוטונים (Active Site / Proton Acceptor): בעמדה <span className="font-mono font-bold text-stone-900">165</span>.</li>
            </ul>
          </li>
        </ul>

        {/* Image 3: Sequence Features Screenshot */}
        <div className="pt-2 max-w-2xl">
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            <img 
              src="assets/Question4/pic3.png" 
              alt="UniProt Sequence Features" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
            />
          </div>
          <div className="mt-2 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>איור 4.3: מיפוי שאריות חומצות האמינו המרכיבות את האתר הפעיל ואתרי הקישור (Features).</span>
          </div>
        </div>
      </div>

      {/* Section 3: Gene Ontology (GO) Profile */}
      <div className="space-y-4 pt-4 border-t border-stone-300/60">
        <h3 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          אנוטציות ה-GO של החלבון (Gene Ontology)
        </h3>
        <p className="text-stone-800 text-lg leading-relaxed">
          חלוקת מונחי ה-GO של החלבון מציגה תמונה ברורה, מובנית ותואמת לחלוטין את הפעילות המטבולית והמבנית שנמצאה עבורו בספרות:
        </p>

        {/* GO Subsections */}
        <div className="space-y-4 text-stone-800 text-lg">
          <div className="space-y-1">
            <h5 className="text-stone-950 font-semibold">
              היבט התפקוד המולקולרי (Molecular Function)
            </h5>
            <ul className="list-disc pr-6 space-y-1 text-base">
              <li>פעילות טריוז-פוספאט איזומראז (Triose-phosphate isomerase activity) – הפונקציה המרכזית.</li>
              <li>פעילות סינתזה של מתילגליאוקסל (Methylglyoxal synthase activity) – יצירת תוצר הלוואי.</li>
              <li>יכולת קישור של שני חלבונים זהים ליצירת דימר (Protein homodimerization activity) – מעיד על כך שהחלבון פועל פיזיולוגית כמבנה זוגי.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h5 className="text-stone-950 font-semibold">
              היבט התהליך הביולוגי (Biological Process)
            </h5>
            <ul className="list-disc pr-6 space-y-1 text-base">
              <li>השתתפות ישירה בתהליכי הפקה ופירוק סוכרים תאיים: גליקוליזה (Glycolytic process) וגלוקונאוגנזה (Gluconeogenesis).</li>
              <li>תהליכים מטבוליים נלווים: פירוק גליצרול (Glycerol metabolic process), סינתזת G3P וסינתזת מתילגליאוקסל.</li>
            </ul>
          </div>
        </div>

        {/* Image 4: Gene Ontology (GO) Screenshot */}
        <div className="pt-2 max-w-2xl">
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            <img 
              src="assets/Question4/pic4.png" 
              alt="UniProt Gene Ontology Terms" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.05]"
            />
          </div>
          <div className="mt-2 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>איור 4.4: סיווג מונחי ה-GO (Gene Ontology) של האנזים ברמת התפקוד המולקולרי והתהליך הביולוגי.</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Question4;