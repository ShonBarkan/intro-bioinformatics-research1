import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Book } from 'lucide-react';

// Added the Appendices (נספחים) tab at the end of the array
const TABS = [
  { path: '/', label: 'כריכה' },
  ...Array.from({ length: 10 }, (_, i) => ({
    path: `/question-${i + 1}`,
    label: `שאלה ${i + 1}`,
  })),
  { path: '/appendices', label: 'נספחים' },
];

const NotebookLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-start justify-center bg-stone-900 font-sans pb-12">
      {/* Injecting native desktop zoom scaling via isolated scoped CSS styles */}
      <style>{`
        @media (min-width: 768px) {
          .notebook-desktop-zoom {
            zoom: 0.8;
          }
        }
      `}</style>

      {/* Fixed Full-Screen Static Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="assets/background.png"
          alt="Static Research Notebook Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Container - Forces custom 80% zoom look on desktop screens cleanly */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-20 md:pt-12 px-4 md:px-8 notebook-desktop-zoom">
        
        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#f4ecd8] border-b border-stone-300 shadow-md flex items-center justify-between px-4 z-50">
          <div className="font-bold text-stone-800 flex items-center gap-2">
            <Book size={20} className="text-stone-700" />
            <span>יומן מחקר</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile Sidebar Drawer */}
        <div 
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#f4ecd8] border-l border-stone-300 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col pt-20 px-4 pb-6 overflow-y-auto`}
          dir="rtl"
        >
          {TABS.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-4 mb-2 rounded border text-lg font-medium transition-colors ${
                location.pathname === tab.path 
                  ? 'bg-stone-800/10 border-stone-800/20 text-stone-900' 
                  : 'border-transparent text-stone-700 hover:bg-black/5'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Notebook & Desktop Tabs Wrapper - Adjusted right padding for wider tabs */}
        <div className="relative w-full flex md:pr-14 md:pl-4">
          
          {/* Desktop Tabs Track (Spans full notebook height on the absolute right side) */}
          <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-14 z-0 flex-col">
            {/* Sticky Container - Locks to viewport and scrolls along the notebook container boundary */}
            <div className="sticky top-12 h-fit flex flex-col gap-[4px] pt-6">
              {TABS.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className={`
                      relative group flex items-center justify-center h-16
                      rounded-r-xl border-y border-r transition-all duration-300 shadow-md
                      hover:-mr-2
                      ${isActive 
                        ? 'bg-[#f4ecd8] border-stone-300 border-l-transparent w-16 -mr-2 z-20 text-stone-900 font-bold' 
                        : 'bg-[#e8dec5] border-stone-400 border-l-stone-300 w-14 -mr-0 z-10 text-stone-600 hover:bg-[#efe4cf]'
                      }
                    `}
                    style={{ writingMode: 'vertical-rl' }}
                    title={tab.label}
                  >
                    <span className="whitespace-nowrap px-2 text-sm font-medium tracking-wide">
                      {tab.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* The Notebook Paper - Minimum height increased to cleanly accommodate taller tabs */}
          <div 
            className="flex-1 bg-[#f4ecd8] md:rounded-l-xl md:rounded-r shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_60px_rgba(0,0,0,0.05)] border border-stone-300 relative z-10 w-full min-h-[880px] px-6 py-8 md:px-16 md:py-12"
            dir="rtl"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(160, 150, 140, 0.1) 0%, transparent 5%, transparent 95%, rgba(160, 150, 140, 0.1) 100%),
                linear-gradient(0deg, transparent 0%, rgba(160, 150, 140, 0.15) 1%, transparent 2%)
              `,
              backgroundSize: '100% 100%, 100% 28px'
            }}
          >
            {/* Spine shadow moved to the LEFT side since tabs are on the right */}
            <div className="hidden md:block absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
            
            {/* Direct injection of content without inner overflow container */}
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotebookLayout;