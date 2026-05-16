import React from 'react';
import { FileText, Film, HelpCircle } from 'lucide-react';

const Question9 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3 text-right">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          העלו קובץ מבנה תלת-ממדי של ההומולוג כקובץ פרויקט של SPDBV, וענו על השאלות הבאות:
        </p>
        <ul className="list-alpha pr-6 text-stone-900 text-lg font-semibold leading-relaxed space-y-1 pt-1">
          <li>א. באיזו טכניקה יצרו את המבנה (קריסטלוגרפיה, NMR, או מיקרוסקופיה אלקטרונית)? מהי הרזולوציה של המבנה? מהו שמו (המזהה שלו ב-PDB)?</li>
          <li>ב. הציגו את המבנה כולו בצורת סרט. הדגישו שיירים פונקציונליים וליגנדים (אם יש) בצבע ובהצגת כל האטומים.</li>
          <li>ג. כתבו הסבר ממצה למבנה המוצג ולהקשרו בתפקיד החלבון. בפרט, הסבירו איך מיקום השיירים הפונקציונאליים במבנה מאפשר את תפקידם.</li>
        </ul>
      </div>

      {/* Part A: Structural Identity Card */}
      <div className="space-y-3">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          א. תעודת הזהות המבנית של החלבון ההומולוג
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          על סמך ניתוח מדור המבנה (Structure) בדף ה-UniProt של החלבון ההומולוג, להלן הנתונים הקריסטלוגרפיים שנמצאו:
        </p>
        <ul className="list-disc pr-6 space-y-2 text-base text-stone-800">
          <li>
            <strong className="text-stone-950 font-semibold">מזהה ה-PDB הרשמי:</strong> 
            <span className="font-mono bg-stone-200 px-1.5 py-0.5 rounded text-stone-950 font-bold">1HTI</span> (מבנה פתור של ריקומביננט טריוז-פוספאט איזומראז אנושי).
          </li>
          <li>
            <strong className="text-stone-950 font-semibold">טכניקת קביעת המבנה:</strong> 
            קריסטלוגרפיה בקרני רנטגן (<span className="font-mono text-sm bg-stone-100 px-1 rounded text-stone-800">X-ray Crystallography</span>), המתאימה למערכת המדידות הניסויית של מאמר היסוד.
          </li>
          <li>
            <strong className="text-stone-950 font-semibold">רזולוציית המבנה המרחבי:</strong> 
            <span className="font-mono font-bold text-stone-950">2.80 Å</span> (אנגסטרם). מדד זה מעיד על רמת הפירוט של צפיפות האלקטרונים שממנה נבנה המודל האטומי.
          </li>
        </ul>
      </div>

      {/* Part B: SPDBV Visualization & Technical Process */}
      <div className="space-y-4 pt-2">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1 text-lg">
          ב. הצגה ויזואלית של המבנה, השיירים והליגנד בתוכנת SPDBV
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          במהלך העבודה האינטראקטיבית עם קובץ המבנה בתוכנת <span className="font-mono bg-stone-100 px-1 rounded text-sm text-stone-900">Swiss-PdbViewer</span>, בוצעו שלבי העריכה וההדגשה הבאים:
        </p>

        <div className="space-y-4 pr-2 text-base text-stone-800 leading-relaxed">
          <p>
            <strong>1. טעינת החלבון והעברה לתצוגת סרט:</strong> טענו את קובץ המבנה המדויק <span className="font-mono text-sm bg-stone-100 px-1 rounded text-stone-800">1HTI.pdb</span> לתוכנה. כדי להציג את המבנה השלישוני בצורה ברורה, הפעלנו את עמודת ה-ribn ב-Control Panel ורינדרנו את החלבון לתצוגת סרט תלת-ממדית. בתצוגה זו נחשפת בבירור מבנה ה"חבית אלפא/בטא" (<span className="italic">TIM barrel</span>) האופיינית לאנזים זה.
          </p>
          <p>
            <strong>2. בידוד שרשרת A (ניקוי המבנה):</strong> מכיוון שהמבנה הגבישי מכיל דימר פיזיולוגי (שרשרת A ושרשרת B) והליגנד קשור ומאופיין בשרשרת A, בחרנו את כל חומצות האמינו של שרשרת B ב-Control Panel וכיבינו את תצוגת ה-show, ה-side וה-ribn שלהן. פעולה זו ניקתה את הרקע ואיפשרה להתמקד באזור הפעיל ללא עומס ויזואלי.
          </p>
          <p>
            <strong>3. הדגשת השיירים הפונקציונליים והסבר ההזזה במספור (Offset):</strong> במהלך העבודה עם ה-Control Panel, שמנו לב לתופעה ביוטכנולוגית מוכרת: קיימת הזזה (Offset) של בדיוק <strong>מינוס 1 (-1)</strong> במספור חומצות האמינו בקובץ המבנה (1HTI) בהשוואה למספור הרשמי בדף ה-UniProt של החלבון. הזזה זו נובעת מכך שבמהלך הפקת החלבון האנושי הריקומביננטי וגיבושו במעבדה, חומצת האמינו הראשונה ברצף הטבעי (מתיונין - Met1) הוסרה, ולכן הספירה הפיזית בקובץ ה-PDB החלה רק מחומצת האמינו הבאה (אלנין, שקיבלה את המזהה ALA1). 
          </p>
          <p className="pr-4 border-r-2 border-amber-600/40 bg-amber-50/30 p-2 rounded-l">
            בהתאם לכך, התאמנו את החיפוש ואיתרנו את ארבעת השיירים הפונקציונליים של שרשרת A בעמדות המוזזות שלהם במבנה: 
            <span className="font-mono bg-stone-200 px-1 rounded text-stone-900 mx-1">ASN 11</span> (במקום 12), 
            <span className="font-mono bg-stone-200 px-1 rounded text-stone-900 mx-1">LYS 13</span> (במקום 14), 
            <span className="font-mono bg-stone-200 px-1 rounded text-stone-900 mx-1">HIS 95</span> (במקום 96) ו-
            <span className="font-mono bg-stone-200 px-1 rounded text-stone-900 mx-1">GLU 165</span> (במקום 166). 
            צבענו את מקטעי הסרט והאטומים שלהם בצבעים מובחנים וניגודיים (צהוב, תכלת, ומג'נטה) כדי להבליט את מיקומם המרחבי המדויק ואת האופן שבהם הם סוגרים על כוך האתר הפעיל.
          </p>
          <p>
            <strong>4. הצגת הליגנד ותפקידו המדעי:</strong> גללנו לסוף ה-Control Panel אל השורה <span className="font-mono text-sm bg-stone-100 px-1 rounded text-stone-800">A PGA 251</span> המייצגת את הליגנד קשור השרשרת. הדלקנו עבורו את עמודות ה-show וה-side כדי להציג את מבנה כל האטומים שלו (בצורת מקלות - Wireframe) וצבענו אותו בצבע ירוק בולט במרכז האנזים.
          </p>
          <div className="bg-stone-50 p-3 rounded border border-stone-200 text-sm space-y-1">
            <p><strong>שם הליגנד המדעי:</strong> חומצה 2-פוספוגליקולית (2-phosphoglycolate, ובקיצור: <strong className="font-mono text-stone-950">PGA</strong>).</p>
            <p><strong>תפקידו במחקר:</strong> מולקולה זו משמשת כמעכב תחרותי חזק של האנזים והיא מהווה אנלוג למצב המעבר (Transition-state analogue). המבנה המרחבי והמטענים החשמליים שלה מדמים בדיוק את מצב הביניים הנדרש ליציבות הסובסטרט במהלך הריאקציה הכימית בגליקוליזה. נוכחותה של מולקולה זו במבנה הקריסטלוגרפי מאפשרת לנו לראות "צילום קפוא" של האתר הפעיל ברגע הקישור הכימי.</p>
          </div>
        </div>
      </div>

      {/* Part C: Structural-Functional Analysis */}
      <div className="space-y-4 pt-2 border-t border-stone-300/60">
        <h4 className="font-bold text-stone-900 flex items-center gap-2 text-lg">
          ג. הסבר מבני-תפקודי של האנזים והאתר הפעיל
        </h4>
        <p className="text-stone-800 text-lg leading-relaxed">
          המבנה התלת-ממדי של החלבון (קובץ 1HTI) מראה בצורה ברורה כיצד הקיפול המרחבי שלו מאפשר לו לבצע את תפקידו המטבולי במסלול הגליקוליזה:
        </p>

        <div className="space-y-4 text-stone-800 text-lg leading-relaxed pr-2">
          <div className="space-y-1">
            <h5 className="font-bold text-stone-950 text-base">1. מבנה ה"חבית" והאתר הפעיל</h5>
            <p>
              החלבון מתקפל לצורה מרחבית מוגדרת המורכבת מחבית בטא מרכזית המוקפת בסיבובי אלפא-הליקס (TIM barrel). מבנה ארכיטקטוני זה אינו מקרי; כל חומצות האמינו החשובות של האנזים מרוכזות יחד בלולאות הממוקמות בצד אחד של החבית, שם הן יוצרות יחד את "כוך" האתר הפעיל.
            </p>
          </div>

          <div className="space-y-1 pt-2">
            <h5 className="font-bold text-stone-950 text-base">2. קרובים במרחב, מרוחקים ברצף והתאמה מושלמת לסובסטרט</h5>
            <p>
              כאשר מסתכלים על רצף חומצות האמינו בצורה קווית, השיירים שמצאנו נמצאים במרחקים גדולים זה מזה לאורך שרשרת החלבון. עם זאת, בזכות הקיפול התלת-ממדי, ארבעת השיירים הללו מתקרבים זה לזה במרחב, מקיפים באופן מושלם את הליגנד (PGA - המעכב שמדמה את הסוכר) בשרשרת A, ויוצרים את האפקטים הבאים:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-base pt-1">
              <li>
                <strong>החלל המרחבי המותאם (כיס הקשירה):</strong> בצפייה במבנה התלת-ממדי, ניתן להבחין בבירור כי בין השיירים השונים קיים חלל (כוך) ייחודי המתאים בגודלו ובצורתו בצורה אבסולוטית למולקולת הסוכר (הליגנד הירוק). התאמה מבנית זו פועלת כמו מנגנון של מנעול ומפתח; אם החלל הזה לא היה קיים, או אם הוא לא היה בנוי בדיוק בצורה הזו, מולקולת הסוכר לא הייתה מצליחה להיכנס, להתאים ולהתקבע בפנים, והפעילות המטבולית כולה לא הייתה יכולה לצאת לפועל.
              </li>
              <li>
                <strong>מזהים A_ASN_11 ו-A_LYS_13:</strong> שיירים אלו ממוקמים בדפנות החלל ופועלים כ"ידיים" המייצבות ומחזיקות את מולקולת הסוכר במקומה המדויק באמצעות מטענים חשמליים וקשרי מימן, ובכך מונעים ממנה לברוח החוצה מתוך הכוך.
              </li>
              <li>
                <strong>מזהים A_HIS_95 ו-A_GLU_165:</strong> אלו השיירים האחראיים על התגובה הכימית עצמה בתוך החלל. השייר <span className="font-mono text-sm bg-stone-100 px-1 rounded text-stone-900 font-bold">A_GLU_165</span> ממוקם בזווית מושלמת המאפשרת לו לקטוף פרוטון ממולקולת הסוכר כדי להניע את הריאקציה, בעוד <span className="font-mono text-sm bg-stone-100 px-1 rounded text-stone-900 font-bold">A_HIS_95</span> מייצב את המטענים החשמליים הזמניים שנוצרים במהלך התהליך.
              </li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <h5 className="font-bold text-stone-950 text-base">3. חשיבות השמירה על המבנה המרחבי</h5>
            <p>
              ההסתכלות במבנה מדגישה כי מיקומם של השיירים הללו וצורת החלל הגיאומטרי שביניהם חייבים להיות מדויקים לחלוטין ברמת האנגסטרום. כל שינוי קטן ברצף חומצות האמינו (כמו מוטציה) יוביל לשינוי בצורה המרחבית של האתר הפעיל. במצב כזה, הכוך המדויק יאבד את צורתו והסוכר לא יוכל להתאים אליו, השיירים לא יוכלו להחזיק את המולקולה או להעביר את הפרוטון בצורה מיטבית, מה שיגרום לחלבון לשנות את צורתו ולתפקד באופן לקוי.
            </p>
          </div>
        </div>
      </div>

      {/* Video Evidence Section (Native MP4 Player) */}
      <div className="pt-6 border-t border-stone-300/60 space-y-4">
        <div className="flex items-center gap-2 text-stone-700">
          <Film size={20} className="text-amber-700" />
          <h3 className="text-lg font-bold font-serif text-stone-900">
            הצגה דינמית: סיבוב מרחבי של האנזים ואתרי הקישור
          </h3>
        </div>
        
        {/* Native HTML5 Video Container Frame */}
        <div className="max-w-3xl bg-stone-100 p-3 rounded-lg border border-stone-300 shadow-sm">
          <div className="relative w-full aspect-video rounded overflow-hidden bg-black border border-stone-300">
            <video 
              className="w-full h-full object-cover"
              controls
              src="assets/Question9/סרטון של החלבון שלנו.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Integrated Figure Caption Below Video Player */}
          <div className="mt-3 pt-2 border-t border-stone-300/60 text-right font-serif text-xs text-stone-600 italic flex items-center gap-1.5 select-none">
            <FileText size={12} />
            <span>
              איור 9.1: הדמיה תלת-ממדית מתוך תוכנת SPDBV המציגה את מבנה חבית ה-TIM, שרשרת A מבודדת (מבנה סרט), ארבעת השיירים הפונקציונליים המודגשים, והליגנד PGA (בירוק) קשור במרכז האתר הפעיל.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Question9;