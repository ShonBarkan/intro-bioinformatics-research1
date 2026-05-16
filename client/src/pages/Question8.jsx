import React from 'react';
import { ExternalLink, FileText, Bookmark,BookOpen } from 'lucide-react';

const Question8 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3 text-right">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          השאלה מתייחסת לתפקידים של ההומולוג ושל שיירים פונקציונאליים בו. בעבודה זו התמקדו בתפקיד אחד, ורק תעירו בקיצור נמרץ על אחרים, אם ישנם. התמקדו בתפקיד שרלוונטי לאותו חלק בחלבון שמכוסה על ידי העמדת הרצפים.
        </p>
        <ul className="list-alpha pr-6 text-stone-900 text-lg font-semibold leading-relaxed space-y-1 pt-1">
          <li>א. מהם התפקידים המוכרים של ההומולוג? אם יש יותר מאחד, באיזה תפקיד בחרתם להתמקד? האם הוא מתאים לחלק שמכוסה בהעמדת הרצפים?</li>
          <li>ב. האם ניתן להצביע על שיירים פונקצונאליים הרלוונטיים לתפקיד שתארתם? אנא תנו זיהוי מפורש (סוג ח"א, מספר, תפקיד השייר ותרומתו).</li>
          <li>ג. הציגו ראיות ניסוייות לתפקידים של החלבון והשיירים על סמך דף החלבון (מה נמדד ומה התוצאה). הביאו דוגמה אחת עדכנית מהשנים האחרונות.</li>
        </ul>
      </div>

      {/* Part A: Homolog Functions & Coverage */}
      <div className="space-y-4">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          א. תפקידי החלבון ההומולוג והתאמתו לחלק המכוסה בהעמדה
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          על פי דף החלבון ב-UniProt, לחלבון ההומולוג האנושי (<span className="font-mono bg-stone-100 px-1 rounded text-sm text-stone-900">P60174</span>) מיוחסים מספר תפקודים מולקולריים ותכונות קישור שונות:
        </p>
        <ul className="list-disc pr-6 space-y-1 text-base text-stone-800">
          <li><strong>פעילות טריוז-פוספאט איזומראז (Triose-phosphate isomerase activity):</strong> זירוז הפיכת הגומלין בין שני הסוכרים המזורחנים DHAP ו-G3P כחלק ממסלול הגליקוליזה (פירוק סוכר) והגלוקונאוגנזה (יצירת סוכר).</li>
          <li><strong>פעילות מתילגליאוקסל סינתאז (Methylglyoxal synthase activity):</strong> ייצור קטליטי של המולקולה מתילגליאוקסל – תוצר לוואי תאי פעיל ורעיל (ציטוטוקסי) המסוגל לשנות ולפגוע בחלבונים, DNA וליפידים בתא.</li>
          <li><strong>פעילות קישור ויוצר דימרים (Protein homodimerization activity):</strong> היכולת של המולקולה להיקשר למולקולה זהה נוספת של עצמה כדי לפעול יחד כמבנה זוגי (דימר) יציב.</li>
          <li><strong>קישור לאנזימי יוביקוויטין ליגאז (Ubiquitin protein ligase binding):</strong> תכונת קישור משנית המעורבת בבקרת יציבות החלבון.</li>
        </ul>
        <p className="text-stone-800 text-lg leading-relaxed pt-2">
          <strong>התפקיד שבו בחרנו להתמקד והתאמתו המבנית:</strong> מתוך רשימת התפקידים הזו, אנו בוחרים להתמקד בתפקיד הראשי, המוכר והחשוב ביותר של האנזים – פעילותו כזרז קטליטי מסוג <strong>Triose-phosphate isomerase</strong> במסלול הפקת האנרגיה (גליקוליזה).
        </p>
        <p className="text-stone-800 text-lg leading-relaxed">
          מצאנו כי ההתאמה בין הפעילות הזו לחלק שמכוסה בהעמדת הרצפים היא מוחלטת ובשיעור של 100%. הסיבה לכך היא שהאנזים שנחקר אינו מורכב מחלקים פונקציונליים נפרדים או מנותקים, אלא בנוי מתחילתו ועד סופו כמתחם מבני יחיד השמור לחלוטין מבחינה אבולוציונית. מכיוון שגרף ההעמדה הראה כיסוי מלא (100% Query Coverage) משני צדי הרצף, המסקנה היא שהפעילות המטבולית שבחרנו מקיפה את כל אורך החלבון באופן מושלם, ואין שום אזור ברצף שנשאר מחוץ להשוואה.
        </p>
      </div>

      {/* Part B: Functional Residues Identification */}
      <div className="space-y-4 pt-2">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          ב. זיהוי ואפיון השיירים הפונקציונליים באתר הפעיל של ההומולוג
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          כדי לאתר את חומצות האמינו שמבצעות פיזית את העבודה הכימית בחלבון, עברנו לסעיף Function בדף של חלבון האדם. אפיון השיירים מבוסס על שלושה שלבים:
        </p>

        {/* Step 1: Active Site */}
        <div className="space-y-2 pr-2">
          <h5 className="font-semibold text-stone-950 text-base flex items-center gap-1.5 text-stone-600 font-mono uppercase tracking-wider">
            שלב 1 – איתור השיירים הקטליטיים (האתר הפעיל)
          </h5>
          <p className="text-stone-800 text-base leading-relaxed">
            מצאנו שתי חומצות אמינו מרכזיות (Active Site) האחראיות באופן ישיר על ביצוע הריאקציה הכימית של פירוק ושינוי הסוכר:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-base text-stone-800">
            <li>
              <strong>גלוטמט (Glutamate / Glu / E) — עמדה 166:</strong> משמש כבסיס קטליטי (Catalytic Base). תפקידו לקחת פיזית פרוטון (אטום מימן) מתוך מולקולת הסוכר כדי לערער את היציבות שלה ולהתניע את השינוי המבני.
            </li>
            <li>
              <strong>היסטידין (Histidine / His / H) — עמדה 96:</strong> משמש כחומצה קטליטית (Catalytic Acid). תפקידו לתרום פרוטון או לייצב את המטען החשמלי הזמני שנוצר על מולקולת הסוכר בזמן שהיא משתנה, כדי למנוע ממנה להתפרק לחומרים לא רצויים.
            </li>
          </ul>
        </div>

        {/* Step 2: Binding Site */}
        <div className="space-y-2 pr-2 pt-2">
          <h5 className="font-semibold text-stone-950 text-base flex items-center gap-1.5 text-stone-600 font-mono uppercase tracking-wider">
            שלב 2 – איתור שיירי הקישור
          </h5>
          <p className="text-stone-800 text-base leading-relaxed">
            בנוסף לאתר הפעיל, מצאנו שתי חומצות אמינו נוספות שתפקידן לשמש כ"ידיים" שתופסות ומחזיקות את הסוכר (Substrate Binding) במנח המדויק ביותר:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-base text-stone-800">
            <li>
              <strong>אספרגין (Asparagine / Asn / N) — עמדה 12:</strong> שייר זה יוצר קשרי מימן חזקים עם מולקולת הסוכר. הוא פועל כמו תפסן שמקבע את הסובסטרט במקום ומונע ממנו לברוח מתוך כוך האנזים.
            </li>
            <li>
              <strong>ליזין (Lysine / Lys / K) — עמדה 14:</strong> חומצת אמינו זו טעונה במטען חשמלי חיובי קבוע. מכיוון שלסוכר שאנחנו מפרקים יש קבוצת זרחן (פוספאט) הטעונה במטען שלילי, שייר הליזין פועל כמו מגנט חזק שמושך את הסוכר פנימה וממקם אותו בפוזיציה המושלמת מול חומצה 166 וחומצה 96.
            </li>
          </ul>
        </div>

        {/* Step 3: Mapping to Target */}
        <div className="space-y-1 pr-2 pt-2">
          <h5 className="font-semibold text-stone-950 text-base flex items-center gap-1.5 text-stone-600 font-mono uppercase tracking-wider">
            שלב 3 – מסקנה לגבי הקשר לחלבון המטרה
          </h5>
          <p className="text-stone-800 text-base leading-relaxed">
            ארבעת השיירים הפונקציונליים שמצאנו בחלבון האדם שמורים לחלוטין באותם מיקומים מרחביים גם בחלבון הצפרדע שלנו. הם ממוקמים במדויק בעמדות <strong>11, 13, 95 ו-165</strong> (ההבדל במספר הנומרי נובע מתזוזה אבולוציונית של אות אחת בלבד בתחילת הרצף). מיפוי זה מוכיח שהשיירים הפונקציונאלים עושים את אותה הפעילות ולא חל שינוי בתפקודם במהלך האבולוציה.
          </p>
        </div>
      </div>

      {/* Part C: Experimental Evidence & Modern Literature */}
      <div className="space-y-4 pt-2">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          ג. ראיות ניסוייות לתפקיד החלבון והשיירים הפונקציונליים
        </h4>
        
        <p className="text-stone-800 text-lg leading-relaxed">
          <strong>שלב 1 – בדיקת מקורות המידע בדף החלבון:</strong> נכנסנו לסעיף התפקוד (Function) בדף של חלבון האדם ולחצנו על כפתור ה-Publications המופיע לצד ארבעת השיירים הפונקציונליים שמיפינו (עמדות 12, 14, 96 ו-166). גילינו שכל ארבעת האזורים הללו מבוססים על אותו מאמר יסוד מדעי יחיד: <em>"Crystal structure of recombinant human triosephosphate isomerase at 2.8-A resolution"</em> (Mande et al., 1994).
        </p>

        <p className="text-stone-800 text-lg leading-relaxed">
          <strong>שלב 2 – ניתוח המערכת הניסויית והמדדים במחקר (מה נמדד):</strong> החוקרים שילבו שני סוגי מדידות במעבדה: מדידה מבנית מרחבית (In-vitro) על ידי גידול גבישים של החלבון האנושי ושימוש בקריסטלוגרפיה בקרני רנטגן למדידת המיקום התלת-ממדי של האטומים, ומדידה קלינית-ביוכימית של מוטציות על ידי ניתוח נתונים רפואיים של חולים הסובלים מחסר גנטי באנזים זה (TPI deficiency).
        </p>

        <p className="text-stone-800 text-lg leading-relaxed">
          <strong>שלב 3 – הגעה למסקנות מתוך התוצאות הניסוייות:</strong> ה"צילום" המרחבי ברזולוציה גבוהה הראה שארבעת השיירים שמיפינו ממוקמים יחד בתוך כוך האתר הפעיל במרחקים ובזוויות מושלמים לאחיזת הסובסטרט. בנוסף, חקר המוטציות הראה כי בקרב חולים, מספיק שחומצה אמינית אחת באזורים אלו משתנה (למשל בעמדה 105) כדי לגרום למבנה החלבון כולו לאבד יציבות, להתפרק במהירות בתא ולהשבית את הפקת האנרגיה, מה שמוכיח שהשיירים חיוניים לחיי התא.
        </p>

        {/* Recent Literature Connection */}
        <div className="space-y-1 pt-2">
          <h5 className="font-semibold text-stone-950 text-base flex items-center gap-1.5 text-stone-500 font-mono uppercase tracking-wider">
            התייחסות עדכנית בספרות המדעית (השנים האחרונות)
          </h5>
          <p className="text-stone-800 text-base leading-relaxed">
            בחיפוש ב-Google Scholar מצאנו התייחסות עדכנית משנת 2024 במאמר הבוחן את החלבון (TPI1) כמטרת טיפול פוטנציאלית בסרטן הלבלב. המחקר מתבסס על הפעילות המטבולית של האנזים ומראה כי חסימתו מהווה אסטרטגיה טיפולית מודרנית להרעבת תאים סרטניים בעלי מוטציה בגן TP53.
          </p>
        </div>
      </div>

      {/* Scientific References & Bibliography */}
      <div className="pt-6 border-t border-stone-300/60 space-y-4">
        <div className="flex items-center gap-2 text-stone-700">
          <BookOpen size={18} />
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
            Scientific References & Literature Links
          </h3>
        </div>
        
        <ol className="space-y-4 text-sm text-stone-700/90 list-none pr-0" dir="ltr">
          
          {/* Reference 1: Foundational Paper */}
          <li className="bg-stone-100/40 p-4 rounded border border-stone-200/60 space-y-2 text-left">
            <div className="font-sans">
              <span className="font-bold mr-2">[1]</span>
              Mande, S. C., et al. (1994). Crystal structure of recombinant human triosephosphate isomerase at 2.8-A resolution. <em className="font-serif">Protein Science</em>, 3(5), 810-821.
            </div>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/8061610/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ExternalLink size={12} />
              <span>https://pubmed.ncbi.nlm.nih.gov/8061610/</span>
            </a>
          </li>

          {/* Reference 2: Modern 2024 Paper */}
          <li className="bg-stone-100/40 p-4 rounded border border-stone-200/60 space-y-2 text-left">
            <div className="font-sans">
              <span className="font-bold mr-2">[2]</span>
              Yang, Y., et al. (2024). TPI1 blockade starves TP53-mutated pancreatic cancer cells by inhibiting glycolysis. <em className="font-serif">Cancer Science</em>, 115(11), 3740-3752.
            </div>
            <a 
              href="https://onlinelibrary.wiley.com/doi/full/10.1111/cas.16302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ExternalLink size={12} />
              <span>https://onlinelibrary.wiley.com/doi/full/10.1111/cas.16302</span>
            </a>
          </li>

        </ol>
      </div>

    </div>
  );
};

export default Question8;