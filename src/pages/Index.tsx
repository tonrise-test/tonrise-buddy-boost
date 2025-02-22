
import React from 'react';
import AirdropBanner from '@/components/AirdropBanner';
import ProjectCard from '@/components/ProjectCard';
import BottomNav from '@/components/BottomNav';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
  {
    title: "NFT Marketplace",
    description: "New generation NFT marketplace on TON",
    progress: 600,
    total: 1000,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    title: "DeFi Protocol",
    description: "Innovative DeFi solution for TON ecosystem",
    progress: 700,
    total: 1000,
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28",
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[85%]">
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex absolute -left-12" />
            <CarouselNext className="hidden sm:flex absolute -right-12" />
          </Carousel>
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
