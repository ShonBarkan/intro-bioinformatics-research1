import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, User, Bot, HelpCircle } from 'lucide-react';

// Import the externalized conversations matrix from the data folder
import CHATS_JSON_DATA from '../data/chats.json';

const AIUsage = () => {
  // State to manage the active sub-tab index for chats
  const [activeChatId, setActiveChatId] = useState('');

  // Automatically select the first chat item when the component mounts
  useEffect(() => {
    if (CHATS_JSON_DATA && CHATS_JSON_DATA.length > 0) {
      setActiveChatId(CHATS_JSON_DATA[0].id);
    }
  }, []);

  // Locate the active conversation object based on state
  const currentChat = CHATS_JSON_DATA.find(chat => chat.id === activeChatId);

  return (
    <div className="space-y-8 pb-12 text-right">
      
      {/* Uniform Question Header Layout */}
      <div className="border-b-2 border-stone-800/20 pb-4 space-y-2 text-right">
        <h2 className="text-3xl font-bold text-black font-serif flex items-center gap-2">
          <Sparkles size={26} className="text-stone-800 animate-pulse" />
          שימוש בכלי בינה מלאכותית (AI) במחקר
        </h2>
        <p className="text-stone-700 text-lg">
          תיעוד מקיף ומבוקר של תהליכי ההתייעצות, סיעור המוחות וניתוח הנתונים שבוצעו מול מודלי שפה (AI) לאורך שלבי המחקר.
        </p>
      </div>

      {/* Horizontal Scrollable Chat Sub-Tabs Bar */}
      <div className="flex flex-wrap gap-2 border-b border-stone-300/60 pb-3" dir="rtl">
        {CHATS_JSON_DATA.map((chat) => {
          const isActive = chat.id === activeChatId;
          return (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`
                px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 flex items-center gap-2 border
                ${isActive 
                  ? 'bg-stone-950 border-stone-950 text-white font-bold shadow-sm scale-[1.02]' 
                  : 'bg-stone-100/80 border-stone-300/70 text-stone-700 hover:bg-stone-200/80 hover:text-stone-950'
                }
              `}
            >
              <MessageSquare size={15} className={isActive ? 'text-amber-500' : 'text-stone-500'} />
              <span>{chat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Conversation Viewer Container */}
      {currentChat ? (
        <div className="space-y-6">
          
          {/* Chat Topic Sub-Header */}
          <div className="bg-stone-100/50 border border-stone-200 rounded-lg p-4 text-right">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
              נושא הדיון / Conversation Focus
            </span>
            <h4 className="text-lg font-bold text-black font-serif mt-0.5">
              {currentChat.topic}
            </h4>
          </div>

          {/* Messages Timeline Stack */}
          <div className="space-y-4">
            {currentChat.messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <div 
                  key={index} 
                  className={`flex flex-col p-5 rounded-lg border transition-colors ${
                    isUser 
                      ? 'bg-white border-stone-200/80 shadow-sm' 
                      : 'bg-stone-100/40 border-stone-300/40 shadow-inner'
                  }`}
                >
                  {/* Meta Sender Tag Indicator */}
                  <div className="flex items-center gap-2 mb-2 select-none">
                    <div className={`p-1 rounded ${isUser ? 'bg-stone-100 text-stone-700' : 'bg-stone-950 text-white'}`}>
                      {isUser ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isUser ? 'text-stone-500' : 'text-stone-950'}`}>
                      {isUser ? 'שאילתת סטודנט / User Prompt' : 'מענה כלי ה-AI / Assistant Response'}
                    </span>
                  </div>

                  {/* Rendered Dialogue Body Content */}
                  <p className="text-stone-950 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      ) : (
        /* Empty Fallback State View */
        <div className="text-center py-12 text-stone-400 font-serif italic flex flex-col items-center justify-center gap-2">
          <HelpCircle size={36} className="text-stone-300" />
          <span>לא נבחרו שיחות פעילות להצגה.</span>
        </div>
      )}

    </div>
  );
};

export default AIUsage;