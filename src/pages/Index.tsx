
import React from 'react';
import AirdropBanner from '@/components/AirdropBanner';
import ProjectCard from '@/components/ProjectCard';
import BottomNav from '@/components/BottomNav';

const projects = [
  {
    title: "TonRise Crowdfunding",
    description: "Development of web3 crowdfunding platform TonRise",
    progress: 800,
    total: 1000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "TonRise Crowdfunding",
    description: "Development of web3 crowdfunding platform TonRise",
    progress: 800,
    total: 1000,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="container max-w-lg mx-auto p-4">
        <AirdropBanner />
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">New Rises</h2>
            <button className="text-ton-accent text-sm">See all</button>
          </div>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Hot Rise</h2>
            <button className="text-ton-accent text-sm">See all</button>
          </div>
          <ProjectCard {...projects[0]} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
