
import React, { useState } from 'react';
import Layout from './components/Layout';
import ProjectNav from './components/ProjectNav';
import GameView from './components/GameView';
import InfoView from './components/InfoView';
import DefaultView from './components/DefaultView';
import { GAMES } from './data/games';
import { ViewMode } from './types';

const App: React.FC = () => {
  // Default to DEFAULT view (the introduction sentence)
  const [currentView, setCurrentView] = useState<ViewMode>(ViewMode.DEFAULT);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const activeGame = selectedGameId ? GAMES.find(g => g.id === selectedGameId) : null;

  const handleSelectProject = (id: number) => {
    setSelectedGameId(id);
    setCurrentView(ViewMode.PROJECT);
  };

  const handleInfoClick = () => {
    setCurrentView(ViewMode.INFO);
    setSelectedGameId(null);
  };

  const handleHomeClick = () => {
    setCurrentView(ViewMode.DEFAULT);
    setSelectedGameId(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewMode.PROJECT:
        return activeGame ? <GameView game={activeGame} /> : <DefaultView />;
      case ViewMode.INFO:
        return <InfoView />;
      case ViewMode.DEFAULT:
      default:
        return <DefaultView />;
    }
  };

  return (
    <Layout 
      onInfoClick={handleInfoClick} 
      onHomeClick={handleHomeClick}
      currentView={currentView}
    >
      {/* Content Area */}
      <div className="flex-grow flex flex-col">
        {renderContent()}
      </div>

      {/* Persistent Project Navigation with large font */}
      <footer className="mt-8 pt-12 border-t border-gray-100">
        <ProjectNav 
          projects={GAMES} 
          activeId={currentView === ViewMode.PROJECT ? selectedGameId : null} 
          onSelect={handleSelectProject} 
        />
      </footer>
    </Layout>
  );
};

export default App;
