
import React from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  total: number;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  progress,
  total,
  image,
}) => {
  const percentage = (progress / total) * 100;

  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-ton-accent animate-glow" />
          <span className="text-white font-medium">
            {progress}/{total}
          </span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20"
        >
          More
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <Progress value={percentage} className="progress-bar h-2" />
      </div>
    </div>
  );
};

export default ProjectCard;
