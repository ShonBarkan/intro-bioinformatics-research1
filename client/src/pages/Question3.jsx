import React from 'react';
import { ExternalLink, BookOpen, Bookmark } from 'lucide-react';

const Question3 = () => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          האם ליצור הזה (או לקרובי משפחתו) יש חשיבות רפואית, חקלאית או אקולוגית ידועה?
        </p>
        <p className="text-stone-900 text-xl font-medium leading-relaxed font-semibold">
          הסבירו בקצרה.
        </p>
      </div>

      {/* Main Analysis Sections */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
        
        {/* Section 1: Medical Significance */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            חשיבות רפואית ומחקרית
          </h4>
          <p>
            ברמה הרפואית-מחקרית, הצפרדע הרפואית האפריקאית (<span className="font-serif italic text-base">Xenopus laevis</span>) משמשת כאחד מאורגניזמי המודל המרכזיים והמשפיעים ביותר במדע המודרני. עמידותה הגבוהה, קלות גידולה בתנאי מעבדה ויכולתה הייחודית להטיל ביצים לאורך כל השנה בתגובה לעירור הורמונלי, הפכו אותה לכלי מחקרי חיוני להבנת תהליכים בביולוגיה התפתחותית, אמבריולוגיה וגנטיקה. 
          </p>
          <p>
            בנוסף, ליצור זה היסטוריה רפואית יישומית: היא שימשה כבדיקת ההיריון המעבדתית האמינה הראשונה בבני אדם (בדיקת הוגבן) במהלך המאה ה-20.
          </p>
        </div>

        {/* Section 2: Ecological Significance */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            חשיבות והשפעה אקולוגית
          </h4>
          <p>
            ברמה האקולוגית, תפוצתה העולמית של הצפרדע כמין פולש חוללה אסון סביבתי חמור ומתמשך. הצפרדע מהווה נשא טבעי ואסימפטומטי לחלוטין של פטריית הכיטריד (<span className="font-serif italic text-base">Batrachochytrium dendrobatidis</span>). 
          </p>
          <p>
            הסחר הבינלאומי ההמוני בצפרדע זו לצורכי בדיקות היריון ומעבדות החל משנות ה-30 של המאה ה-20, הפיץ את הפתוגן הקטלני הזה לכל רחבי הגלובוס. כיום, פטרייה זו נחשבת לאחד האיומים הגדולים ביותר על הישרדות הדו-חיים בעולם, והיא מובילה לקריסת אוכלוסיות שלמות ולהכחדה המונית של מינים מקומיים.
          </p>
        </div>

        {/* Section 3: Agricultural Significance */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 border-b border-stone-300/60 pb-1">
            חשיבות חקלאית
          </h4>
          <p>
            בניגוד להשפעותיה הדרמטיות בתחומי הרפואה והאקולוגיה, חשיבותה החקלאית הישירה של הצפרדע הרפואית היא <strong>זניחה</strong> ואינה מהווה פקטור משמעותי במחקר או בתעשייה החקלאית.
          </p>
        </div>

      </div>

      {/* Professional Terms Section (Glossary) */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5 border-b border-stone-200 pb-1">
          <Bookmark size={14} />
          לקסיקון מושגים מקצועיים
        </h3>
        
        <div className="space-y-3 text-right">
          <p className="text-base text-stone-800">
            <strong className="text-stone-950 font-semibold">אורגניזם מודל (Model organism):</strong> יצור חי שנחקר באופן אינטנסיבי במעבדות (כמו עכבר או זבוב פירות) כדי להבין תהליכים ביולוגיים כלליים, מתוך הנחה שהמנגנונים שנמצאים בו פועלים בצורה דומה גם ביצורים אחרים.
          </p>
          <p className="text-base text-stone-800">
            <strong className="text-stone-950 font-semibold">מין פולש (Invasive species):</strong> יצור חי שהופץ על ידי האדם לאזור מחוץ לתפוצתו הטבעית, התבסס בו, ומחולל נזקים סביבתיים קשים למינים המקומיים.
          </p>
          <p className="text-base text-stone-800">
            <strong className="text-stone-950 font-semibold">נשא טבעי/אסימפטומטי (Natural/Asymptomatic carrier):</strong> אורגניזם הנושא בגופו פתוגן (גורם מחלה כמו פטרייה או וירוס) ומפיץ אותו לסביבה, אך הוא עצמו אינו מראה סימני מחלה ואינו נפגע ממנו.
          </p>
        </div>
      </div>

      {/* Scientific References Section */}
      <div className="pt-6 border-t border-stone-300/60 space-y-4">
        <div className="flex items-center gap-2 text-stone-700">
          <BookOpen size={18} />
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
            Scientific References & Bibliography
          </h3>
        </div>
        
        {/* References List */}
        <ol className="space-y-4 text-sm text-stone-700/90 list-none pr-0" dir="ltr">
          
          {/* Reference 1 */}
          <li className="bg-stone-100/40 p-4 rounded border border-stone-200/60 space-y-2 text-left">
            <div className="font-sans">
              <span className="font-bold mr-2">[1]</span>
              Gurdon, J. B., & Hopwood, N. (2000). The introduction of <em className="font-serif">Xenopus laevis</em> into developmental biology: of empire, pregnancy testing and ribosomal genes. <em className="font-serif">International Journal of Developmental Biology</em>, 44(1), 43-50.
            </div>
            <a 
              href="https://www.hps.cam.ac.uk/files/hopwood-xenopus.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ExternalLink size={12} />
              <span>https://www.hps.cam.ac.uk/files/hopwood-xenopus.pdf</span>
            </a>
          </li>

          {/* Reference 2 */}
          <li className="bg-stone-100/40 p-4 rounded border border-stone-200/60 space-y-2 text-left">
            <div className="font-sans">
              <span className="font-bold mr-2">[2]</span>
              Weldon, C., du Preez, L. H., Hyatt, A. D., Muller, R., & Speare, R. (2004). Origin of the Amphibian Chytrid Fungus. <em className="font-serif">Emerging Infectious Diseases</em>, 10(12), 2100-2105.
            </div>
            <a 
              href="https://stacks.cdc.gov/view/cdc/14508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ExternalLink size={12} />
              <span>https://stacks.cdc.gov/view/cdc/14508</span>
            </a>
          </li>

          {/* Reference 3 */}
          <li className="bg-stone-100/40 p-4 rounded border border-stone-200/60 space-y-2 text-left">
            <div className="font-sans">
              <span className="font-bold mr-2">[3]</span>
              Rollins-Smith, L. A., et al. (2011). Immune defenses against <em className="font-serif">Batrachochytrium dendrobatidis</em>, a fungus linked to global amphibian declines, in the South African clawed frog, <em className="font-serif">Xenopus laevis</em>. <em className="font-serif">Infection and Immunity</em>, 79(6), 2420-2428.
            </div>
            <a 
              href="https://journals.asm.org/doi/10.1128/iai.00402-10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ExternalLink size={12} />
              <span>https://journals.asm.org/doi/10.1128/iai.00402-10</span>
            </a>
          </li>

        </ol>
      </div>

    </div>
  );
};

export default Question3;