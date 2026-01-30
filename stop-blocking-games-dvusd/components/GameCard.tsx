
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer flex flex-col hover:-translate-y-1 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
          {game.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
           <button className="w-full bg-cyan-500 text-slate-900 font-bold py-2 rounded-lg text-sm">
             PLAY NOW
           </button>
        </div>
      </div>
      <div className="p-4 bg-slate-800">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1">{game.title}</h3>
          <div className="flex items-center text-yellow-400 text-xs font-bold">
            <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {game.rating}
          </div>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
