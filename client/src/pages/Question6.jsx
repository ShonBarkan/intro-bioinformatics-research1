import React from 'react';
import { ExternalLink, FileText, GitFork, Minimize2 } from 'lucide-react';

const Question6 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3 text-right">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          מהו דף החלבון של ההומולוג באתר UniProt? מה אורכו של ההומולוג (מספר חומצות אמינו, ח"א)? מאיזה יצור מגיע ההומולוג?
        </p>
        <ul className="list-disc pr-6 text-stone-900 text-lg font-semibold leading-relaxed space-y-1 pt-1">
          <li>מהי מידת הקרבה האבולוציונית בין יצור זה ליצור ממנו הגיע חלבון המטרה? נמקו בקצרה.</li>
        </ul>
      </div>

      {/* Quick Specs & Link Badge */}
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
            דף חלבון ההומולוג / Homolog UniProt Entry
          </span>
          <a 
            href="https://www.uniprot.org/uniprotkb/P60174/entry" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-stone-800 text-stone-100 px-4 py-3 rounded font-mono text-sm md:text-base hover:bg-stone-700 transition-colors shadow group w-full sm:w-auto"
            dir="ltr"
          >
            <ExternalLink size={16} className="text-stone-400 group-hover:text-stone-200 shrink-0" />
            <span className="truncate">https://www.uniprot.org/uniprotkb/P60174/entry</span>
          </a>
        </div>

        {/* Quick Biological Specifications */}
        <div className="pt-2 space-y-2 text-xl text-stone-900">
          <p>
            <strong className="text-stone-700 font-semibold text-lg ml-2">אורך ההומולוג:</strong> 
            249 חומצות אמינו (ח"א).
          </p>
          <p>
            <strong className="text-stone-700 font-semibold text-lg ml-2">היצור (Organism):</strong> 
            <span className="font-serif italic font-semibold text-stone-950">Homo sapiens</span> (אדם).
          </p>
        </div>
      </div>

      {/* Visual Lineage & Evolutionary Tree Split (Built natively via Tailwind) */}
      <div className="space-y-4 pt-4 border-t border-stone-300/60">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 text-lg">
          <GitFork size={18} className="text-stone-600 rotate-90" />
          תרשים השושלת והפיצול האבולוציוני (Lineage Tree)
        </h4>
        
        {/* Native Flowchart Tree Canvas */}
        <div className="bg-stone-100/40 border border-stone-200 rounded-lg p-6 font-mono text-xs sm:text-sm text-stone-800 space-y-4 shadow-sm" dir="ltr">
          
          {/* Shared Pipeline Track */}
          <div className="flex flex-col items-center space-y-2 max-w-md mx-auto text-center">
            <div className="bg-stone-200 border border-stone-300 px-3 py-1 rounded shadow-sm text-stone-500">cellular organisms</div>
            <div className="h-4 w-0.5 bg-stone-400"></div>
            <div className="bg-stone-200 border border-stone-300 px-3 py-1 rounded shadow-sm">Eukaryota (eukaryotes)</div>
            <div className="h-4 w-0.5 bg-stone-400"></div>
            <div className="bg-stone-200 border border-stone-300 px-3 py-1 rounded shadow-sm">Metazoa (animals)</div>
            <div className="h-4 w-0.5 bg-stone-400"></div>
            <div className="bg-stone-200 border border-stone-300 px-3 py-1 rounded shadow-sm">Chordata (chordates)</div>
            <div className="h-4 w-0.5 bg-stone-400"></div>
            <div className="bg-stone-200 border border-stone-300 px-3 py-1 rounded shadow-sm">Vertebrata (vertebrates)</div>
            <div className="h-4 w-0.5 bg-stone-400"></div>
            <div className="bg-amber-600 border border-amber-700 text-white font-bold px-4 py-1.5 rounded shadow-md flex items-center gap-1">
              <Minimize2 size={14} />
              <span>Tetrapoda (tetrapods) — נקודת המפגש האחרונה</span>
            </div>
          </div>

          {/* Divergent Branch Architecture */}
          <div className="grid grid-cols-2 gap-4 pt-4 relative">
            
            {/* Split Visual Guidelines Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-stone-400 mx-auto"></div>
            
            {/* Human Lineage Branch (Left Column) */}
            <div className="border-l-2 border-stone-300 pl-4 space-y-2 flex flex-col items-center text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">ענף היונקים</span>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Amniota (amniotes)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Mammalia (mammals)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Primates (primates)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Hominidae (great apes)</div>
              <div className="h-3 w-0.5 bg-stone-400"></div>
              <div className="bg-stone-900 border border-stone-950 text-stone-50 font-bold px-3 py-1.5 rounded shadow w-full max-w-xs italic text-sm">
                Homo sapiens (Human)
              </div>
            </div>

            {/* Frog Lineage Branch (Right Column) */}
            <div className="border-r-2 border-stone-300 pr-4 space-y-2 flex flex-col items-center text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">ענף הדו-חיים</span>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Amphibia (amphibians)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Anura (frogs & toads)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Pipidae (tongueless frogs)</div>
              <div className="h-2 w-0.5 bg-stone-300"></div>
              <div className="bg-white border border-stone-300 px-2 py-1 rounded text-xs w-full max-w-xs text-stone-600">Xenopus</div>
              <div className="h-3 w-0.5 bg-stone-400"></div>
              <div className="bg-stone-900 border border-stone-950 text-stone-50 font-bold px-3 py-1.5 rounded shadow w-full max-w-xs italic text-sm">
                Xenopus laevis (Frog)
              </div>
            </div>

          </div>
        </div>

        {/* Optional Figure Caption Below Visual Tree */}
        <div className="text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none pr-1">
          <FileText size={12} />
          <span>איור 6.1: מיפוי השוואתי של השושלות האבולוציוניות מ-UniProt והצגת נקודת הפיצול הפילוגנטית.</span>
        </div>
      </div>

      {/* Detailed Evolutionary Analysis Text Sections */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed pt-2">
        
        {/* Section 1: The Shared Lineage Path */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            המסלול המשותף (היכן היצורים נפגשים)
          </h4>
          <p>
            כדי להעריך את מידת הקרבה האבולוציונית, השווינו בין השושלות (Lineage) של שני היצורים כפי שהן מופיעות בבסיס הנתונים UniProt. מצאנו כי שני היצורים חולקים מסלול ארוך ומשותף על עץ החיים: שניהם אורגניזמים איקריוטיים (<span className="font-serif italic text-base">Eukaryota</span>), שייכים לממלכת בעלי החיים (<span className="font-serif italic text-base">Metazoa</span>), למערכת המיתרניים (<span className="font-serif italic text-base">Chordata</span>), ולתת-מערכת בעלי החוליות (<span className="font-serif italic text-base">Vertebrata</span>).
          </p>
          <p>
            יותר מכך, נקודת המפגש האחרונה והמפותחת ביותר שלהם היא בקבוצה המכונה <strong>Tetrapoda (ארבע-רגליים)</strong> – קבוצת בעלי החוליות המפותחים הכוללת את כל שוכני היבשה (או כאלו שהתפתחו מאבות קדמונים שוכני יבשה).
          </p>
        </div>

        {/* Section 2: The Point of Divergence */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            נקודת הפיצול (היכן המסלולים נפרדים)
          </h4>
          <p>
            מיד לאחר קבוצת הארבע-רגליים, המסלולים הטקסונומיים שלהם מתפצלים לחלוטין לשני כיוונים שונים באבולוציה:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>צפרדע המטרה פונה למחלקת הדו-חיים (<span className="font-serif italic text-base">Amphibia</span>), ומשם לסדרת חסרי הזנב (<span className="font-serif italic text-base">Anura</span>).</li>
            <li>האדם פונה לקבוצת בעלי קרום שפיר (<span className="font-serif italic text-base">Amniota</span>), משם למחלקת היונקים (<span className="font-serif italic text-base">Mammalia</span>) ולסדרת הפרימטים (<span className="font-serif italic text-base">Primates</span>).</li>
          </ul>
        </div>

        {/* Section 3: Summary & Conclusion */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            סיכום ונימוק מידת הקרבה האבולוציונית
          </h4>
          <p>
            ניתן להגדיר את מידת הקרבה האבולוציונית בין שני היצורים כ<strong>בינונית-קרובה</strong>. מצד אחד, אם נשווה אותם ליצורי מודל רחוקים או חד-תאיים כמו חיידק ה-<span className="font-serif italic text-base">E. coli</span> (הנמצאים על ענפים וממלכות נפרדות לחלוטין בעץ החיים), האדם והצפרדע קרובים מאוד – שניהם בעלי חוליות מורכבים שחולקים מערכות גוף אנאטומיות דומות ואב קדמון משותף. 
          </p>
          <p>
            מצד שני, בתוך עולם בעלי החוליות עצמו הם מייצגים שתי מחלקות נפרדות לחלוטין (דו-חיים מול יונקים) אשר התפצלו לפני כ-<strong>350 מיליון שנים</strong>. מרחק זמן זה מסביר מדוע רצפי החלבונים שלהם נשארו דומים מאוד ומורפולוגיית האתר הפעיל השתמרה (כפי שראינו במדדי ה-BLAST), אך עם זאת הם אינם זהים לחלוטין.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Question6;