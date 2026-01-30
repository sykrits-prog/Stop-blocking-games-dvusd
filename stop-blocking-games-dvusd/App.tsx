import React, { useState, useMemo } from 'react';
import { GAMES_DATA, CATEGORIES } from './constants';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleBackToHome = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans">
      <Navbar 
        onSearch={setSearchQuery} 
        onHomeClick={handleBackToHome}
        currentSearch={searchQuery}
      />

      <main className="flex-1 px-4 md:px-8 py-8 max-w-7xl mx-auto w-full">
        {!selectedGame ? (
          <>
            {/* Hero Section */}
            <div className="mb-12 relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700 p-8 md:p-12">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full mb-4 tracking-widest uppercase border border-cyan-500/30">
                  Featured
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                  UNBLOCKED <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">GAMING HUB</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Browse through our library of browser-optimized games. No blocks, no limits, just pure entertainment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => handleGameSelect(GAMES_DATA[0])}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none hidden lg:block"></div>
            </div>

            {/* Filter Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Categories</h3>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap border ${
                      selectedCategory === cat 
                        ? 'bg-cyan-500 border-cyan-400 text-slate-900' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Games Grid */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
                {searchQuery ? `Search: ${searchQuery}` : `${selectedCategory} Collection`}
              </h3>
              <span className="text-slate-500 text-sm font-bold">{filteredGames.length} Results</span>
            </div>

            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <GameCard key={game.id} game={game} onClick={handleGameSelect} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-slate-800/20 rounded-3xl border border-dashed border-slate-700">
                <p className="text-slate-500 text-xl font-medium">No games found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-4 text-cyan-400 hover:underline font-bold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        ) : (
          <GamePlayer game={selectedGame} onBack={handleBackToHome} />
        )}
      </main>

      {/* Footer */}
      {!selectedGame && (
        <footer className="mt-auto py-12 px-8 bg-slate-950/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h1 className="text-xl font-black tracking-tighter">NEXUS<span className="text-cyan-400">GAMES</span></h1>
              </div>
              <p className="text-slate-500 text-sm font-medium">© 2024 NexusGames Hub. All Rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;