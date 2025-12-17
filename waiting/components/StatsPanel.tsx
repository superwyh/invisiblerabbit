import React from 'react';
import { ASSETS } from '../constants';
import { GameState } from '../types';

interface StatsPanelProps {
  state: GameState;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ state }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b-2 border-slate-700 shadow-lg z-20">
      
      {/* Resources */}
      <div className="flex space-x-8">
        <div className="flex items-center group cursor-help">
          <div className="w-8 h-8 mr-3 relative">
            <img src={ASSETS.icon_heart} alt="Sanity" className="w-full h-full object-contain pixelated drop-shadow-md group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">SANITY</div>
            <div className="text-xl font-bold text-pink-400 font-mono">{state.sanity}%</div>
          </div>
        </div>

        <div className="flex items-center group cursor-help">
          <div className="w-8 h-8 mr-3 relative">
            <img src={ASSETS.icon_bulb} alt="Truth" className="w-full h-full object-contain pixelated drop-shadow-md group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">EVIDENCE</div>
            <div className="text-xl font-bold text-amber-400 font-mono">{state.evidence}/10</div>
          </div>
        </div>

        <div className="flex items-center group cursor-help">
          <div className="w-8 h-8 mr-3 relative">
            <img src={ASSETS.icon_path} alt="Chaos" className="w-full h-full object-contain pixelated drop-shadow-md group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">CHAOS</div>
            <div className="text-xl font-bold text-blue-400 font-mono">{state.chaos}%</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="text-right hidden md:block">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">SYSTEM SYNC</div>
        <div className="flex items-center justify-end space-x-1">
          <span className="block w-2 h-4 bg-green-500 opacity-80 animate-pulse"></span>
          <span className="block w-2 h-4 bg-green-500 opacity-60"></span>
          <span className="block w-2 h-4 bg-green-500 opacity-40"></span>
          <span className="text-xs text-green-500 font-mono ml-2">ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;