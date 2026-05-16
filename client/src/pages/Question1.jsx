import React from 'react';
import { ExternalLink, Award, AlertCircle, FileText, HelpCircle } from 'lucide-react';

const Question1 = () => {
  return (
    <div className="space-y-8 pb-12">
      
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-3">
        <p className="text-stone-900 text-xl font-medium leading-relaxed">
          מהו הדף של חלבון המטרה באתר של UniProt? תנו URL.
        </p>
        <p className="text-stone-900 text-xl font-medium leading-relaxed font-semibold">
          הסבירו והצדיקו את בחירתכם.
        </p>
      </div>

      {/* Target URL Badge */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
          Target Protein URL
        </h3>
        <a 
          href="https://www.uniprot.org/uniprotkb/Q7ZWN5/entry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-stone-800 text-stone-100 px-4 py-3 rounded font-mono text-sm md:text-base hover:bg-stone-700 transition-colors shadow group w-full sm:w-auto"
          dir="ltr"
        >
          <ExternalLink size={16} className="text-stone-400 group-hover:text-stone-200 shrink-0" />
          <span className="truncate">https://www.uniprot.org/uniprotkb/Q7ZWN5/entry</span>
        </a>
      </div>

      {/* Scientific Justification & Content */}
      <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
        
        {/* Paragraph 1: Discovery */}
        <p>
          בחרנו ברשומה <strong className="font-mono bg-stone-200 px-1 rounded text-stone-900">Q7ZWN5</strong> כחלבון המטרה שלנו מכיוון שראינו שתוצאות החיפוש ב-UniProt מציגות שתי רשומות פעילות בעלות התאמה מוחלטת (100% זהות) לרצף השאילתה שהזנו. שתי הרשומות הן באורך זהה של 248 חומצות אמינו, שייכות לאותו האורגניזם (<em className="font-serif">Xenopus laevis</em> – צפרדע רפואית אפריקאית) ומזוהות כחלבון <strong>Triosephosphate isomerase</strong>.
        </p>

        <p>
          החלטנו להעדיף את הרשומה Q7ZWN5 על פני הרשומה המקבילה (A0A974H9Q1) בעקבות ההבדל המהותי שמצאנו ברמת הבקרה שלהן בבסיס הנתונים:
        </p>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          {/* Reviewed Card */}
          <div className="bg-yellow-50/40 border border-yellow-200/60 p-5 rounded-lg shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-700 font-bold">
              <Award size={20} className="fill-amber-500/20" />
              <h4>רשומה מבוקרת (Reviewed)</h4>
            </div>
            <p className="text-sm text-stone-700/90">
              ראינו שלצד הרשומה Q7ZWN5 מופיע <strong>אייקון של ספר זהב</strong>, המעיד על כך שהיא נכללת במאגר <strong>Swiss-Prot</strong>. חלק זה ב-UniProt עובר אוצרות ידנית (Manual Curation) על ידי מומחים שמקשרים ומאמתים את המידע אל מול הספרות המדעית, ולכן הוא מייצג את רמת האמינות הגבוהה ביותר.
            </p>
          </div>

          {/* Unreviewed Card */}
          <div className="bg-stone-100/40 border border-stone-200/60 p-5 rounded-lg shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-stone-600 font-bold">
              <AlertCircle size={20} />
              <h4>רשומה שאינה מבוקרת (Unreviewed)</h4>
            </div>
            <p className="text-sm text-stone-700/90">
              לעומת זאת, הרשומה השנייה מסומנת ב<strong>אייקון אפור</strong>, המעיד על השתייכותה למאגר <strong>TrEMBL</strong> – מאגר המבוסס על אנוטציות ממוחשבות ואוטומטיות בלבד, שטרם עברו בקרת איכות אנושית.
            </p>
          </div>

        </div>

        {/* Conclusion Summary */}
        <div className="border-t border-stone-800/10 pt-4 font-medium text-stone-900">
          מכיוון שהמטרה המדעית שלנו היא לבסס את המחקר על המידע המדויק, המבוקר והאמין ביותר, בחרנו להמשיך את העבודה עם דף החלבון המבוקר Q7ZWN5.
        </div>
      </div>

      {/* Dedicated Image Area (Vintage Sketch / Polaroid Style Frame) */}
      <div className="pt-6">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500 mb-3">
          Visual Evidence & Source Screenshot
        </h3>
        <div className="bg-stone-100/80 border border-stone-300 p-4 rounded shadow-md max-w-2xl mx-auto group hover:shadow-lg transition-shadow duration-300">
          
          {/* Inner Image Container - Removed aspect-video to prevent clipping */}
          <div className="relative w-full bg-stone-200 rounded overflow-hidden border border-stone-300/60">
            {/* Image configured to scale naturally without cropping */}
            <img 
              src="assets/Question1/pic1.png" 
              alt="UniProt Entry Comparison" 
              className="w-full h-auto block opacity-95 mix-blend-multiply filter sepia-[0.10]"
            />
            
            {/* Tiny Indicator Overlay */}
            <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>

          {/* Image Caption styled like a hand-written note */}
          <div className="mt-4 pt-2 border-t border-stone-300/60 text-center font-serif text-sm text-stone-600 italic flex items-center justify-center gap-2">
            <FileText size={14} />
            <span>איור 1.1: השוואה בין הרשומה המבוקרת (Swiss-Prot) לרשומה האוטומטית בפורטל UniProt.</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Question1;