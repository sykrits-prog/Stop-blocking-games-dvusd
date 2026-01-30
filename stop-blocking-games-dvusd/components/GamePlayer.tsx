
import React from 'react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game, onBack }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col">
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <div className="h-6 w-[1px] bg-slate-700 hidden sm:block"></div>
          <h2 className="text-lg font-bold text-white hidden sm:block">{game.title}</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-slate-800 rounded-full px-3 py-1 text-xs font-bold text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            LIVE
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black relative">
        <iframe
          src={game.iframeUrl}
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="bg-slate-900 border-t border-slate-800 p-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={game.thumbnail} alt={game.title} className="w-12 h-12 rounded object-cover" />
            <div>
              <h3 className="font-bold text-white">{game.title}</h3>
              <p className="text-slate-400 text-xs">{game.category}</p>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100 0m0 0a3 3 0 100 0" />
                </svg>
                Share
             </button>
             <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favorite
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
