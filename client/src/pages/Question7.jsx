import React from 'react';
import { FileText, Hash, Percent, Sliders } from 'lucide-react';

const Question7 = () => {
  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3 text-right">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          העלו קובץ המציג את העמדת הרצפים בין חלבון המטרה להומולוג. מהו אחוז הזהות של השיירים בהעמדת הרצפים? כמה רווחים יש בה?
        </p>
        <ul className="list-disc pr-6 text-stone-900 text-lg font-semibold leading-relaxed space-y-1 pt-1">
          <li>אילו חלקים של שני החלבונים מכוסים על ידי העמדת הרצפים? פרטו את העמדות (positions), שבהן מתחילה ונגמרת העמדת הרצפים, בשני החלבונים.</li>
        </ul>
      </div>

      {/* Alignment Metrics Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-stone-300/60 py-6 my-2">
        
        {/* Metric 1: Identity */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <Percent size={18} className="text-amber-700" />
            <h5>אחוז זהות (Identity)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">83.9%</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            התאמה מוחלטת של 208 מתוך 248 השיירים שהועמדו לאורך קופסת ההשוואה.
          </p>
        </div>

        {/* Metric 2: Gaps */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <Hash size={18} className="text-amber-700" />
            <h5>רווחים (Gaps)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">1 / 248</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            רווח בודד המהווה כ-0.4% בלבד מכלל אורך האלינמנט המקומי המחושב.
          </p>
        </div>

        {/* Metric 3: Similarity */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-stone-700 font-semibold text-base">
            <Sliders size={18} className="text-amber-700" />
            <h5>דמיון כימי (Similarity)</h5>
          </div>
          <p className="text-3xl font-mono font-bold text-stone-950">91.9%</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            ציון גבוה המראה כי רוב ההחלפות שחלו הן שמרניות בעלות תכונות פיזיקליות דומות (228/248 שיירים).
          </p>
        </div>

      </div>

      {/* Detailed Alignment Analysis Text Sections */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed pt-2">
        
        {/* Section 1: Score Matrix Box */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            מטריצת הניקוד בהעמדה
          </h4>
          <p>
            על פי פלט הדו"ח, תוכנת <span className="font-mono bg-stone-100 px-1 rounded text-sm text-stone-900">EMBOSS Water</span> עשתה שימוש במטריצת המשקל והניקוד <strong>EBLOSUM62</strong> לצורך חישוב ציוני ההתאמה וההחלפה המיטביים בין חומצות האמינו. מטריצה זו מהווה את המודל הסטנדרטי והמהימן ביותר להערכת דמיון חלבונים אבולוציוני.
          </p>
        </div>

        {/* Section 2: Gaps Breakdown */}
        <div className="space-y-2">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            ניתוח הרווחים (Gaps) בהעמדה
          </h4>
          <p>
            בהעמדת הרצפים נמצא <strong>רווח (Gap) אחד בלבד</strong> לאורך כל המבנה. מבט מעמיק בשורות האלינמנט מגלה כי הרווח ממוקם באזור תחילת הרצף, ספציפית ב<strong>עמדה מספר 4 של ההעמדה</strong>. 
          </p>
          <p>
            בנקודה זו, לרצף חלבון האדם ישנה חומצת אמינו מסוג סרין (<span className="font-mono bg-stone-200 px-1 rounded text-sm text-stone-900">S</span>) המופיעה כחלק מהמוטיב <span className="font-mono text-base">MAPS</span>, בעוד שברצף חלבון המטרה של הצפרדע חומצה זו אינה קיימת (מופיע הרצף <span className="font-mono text-base">MSP-</span>), מה שמאלץ את התוכנה לפתוח פנלטי של רווח כדי לשמור על האלינמנט המיטבי בהמשך.
          </p>
        </div>

        {/* Section 3: Covered Positions */}
        <div className="space-y-3">
          <h4 className="font-bold text-stone-900 border-b border-stone-300/60 pb-1">
            חלקי החלבונים המכוסים ועמדות קצה
          </h4>
          <p>
            העמדת הרצפים הלוקאלית הזו מציגה כיסוי מלא ורציף (100%) של שני החלבונים לכל אורך השלד הפוליפפטידי שלהם, ללא קטעים שהושמטו או נחתכו בקצוות. עמדות ההתחלה והסיום המדויקות מוגדרות כך:
          </p>
          
          {/* Flex Cards for Covered Positions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            
            {/* Target Protein Card */}
            <div className="flex-1 bg-stone-100/50 border border-stone-200 p-4 rounded-lg shadow-sm space-y-1">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-amber-800">
                חלבון המטרה / Target Protein
              </span>
              <h5 className="font-bold text-stone-950 text-base">
                TPIS_XENLA (צפרדע)
              </h5>
              <p className="text-base text-stone-700 leading-relaxed">
                ההעמדה מתחילה בחומצת האמינו הראשונה (עמדה <span className="font-mono font-bold text-stone-900">1</span>, מתיונין - M) ומסתיימת בחומצת האמינו האחרונה של הרצף (עמדה <span className="font-mono font-bold text-stone-900">247</span>, ליזין - K).
              </p>
            </div>

            {/* Homolog Protein Card */}
            <div className="flex-1 bg-stone-100/50 border border-stone-200 p-4 rounded-lg shadow-sm space-y-1">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
                חלבון ההומולוג / Homolog Protein
              </span>
              <h5 className="font-bold text-stone-950 text-base">
                TPIS_HUMAN (אדם)
              </h5>
              <p className="text-base text-stone-700 leading-relaxed">
                ההעמדה מתחילה בחומצת האמינו הראשונה (עמדה <span className="font-mono font-bold text-stone-900">1</span>, מתיונין - M) ומסתיימת בחומצת האמינו האחרונה של הרצף (עמדה <span className="font-mono font-bold text-stone-900">248</span>, ליזין - K).
              </p>
            </div>

          </div>

          <p className="pt-2">
            המשמעות הסטטיסטית של נתון זה היא ששני האנזימים השתמרו לכל אורך המבנה המרחבי שלהם במהלך ההיסטוריה האבולוציונית, ללא אירועים משמעותיים של הוספת או מחיקת דומיינים שלמים.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Question7;