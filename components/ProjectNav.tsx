import React from 'react';
import { useTranslation } from 'react-i18next';
import { GameProject } from '../types';

interface ProjectNavProps {
  projects: GameProject[];
  activeId: number | null;
  onSelect: (id: number) => void;
}

const ProjectNav: React.FC<ProjectNavProps> = ({ projects, activeId, onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="z-10 w-full overflow-x-auto custom-scrollbar whitespace-nowrap pb-4">
      <div className="flex items-baseline gap-12 md:gap-24">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onSelect(project.id)}
            className={`flex items-baseline transition-colors group ${
              activeId === project.id ? 'text-black' : 'text-gray-300 hover:text-black'
            }`}
          >
            <span className="text-lg md:text-2xl font-bold mr-4 opacity-50">
              0{index + 1}
            </span>
            <span className="text-4xl md:text-7xl font-bold tracking-tighter">
              {t(`games.${project.id}.title`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectNav;
