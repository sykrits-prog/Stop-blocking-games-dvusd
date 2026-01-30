
import React from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
  onHomeClick: () => void;
  currentSearch: string;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onHomeClick, currentSearch }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={onHomeClick}
      >
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-cyan-400">GAMES</span></h1>
      </div>

      <div className="relative w-full md:w-96">
        <input
          type="text"
          placeholder="Search games..."
          value={currentSearch}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-full px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500"
        />
        <svg 
          className="absolute right-4 top-3 w-5 h-5 text-slate-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
