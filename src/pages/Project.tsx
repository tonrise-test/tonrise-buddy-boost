
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BottomNav from '@/components/BottomNav';

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-64">
          <img
            src="/lovable-uploads/d6a7efb2-e73b-4999-9cd7-62042b058b0b.png"
            alt="Project Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-ton-dark" />
        </div>
        
        <div className="relative pt-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/20 backdrop-blur-md hover:bg-black/40"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative px-4 pt-32">
          <div className="flex gap-2 mb-3">
            <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">STARTUP</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">WEB3</Badge>
            <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30">OFFICIAL</Badge>
          </div>

          <h1 className="text-xl font-bold mb-2">TonRise</h1>
          <p className="text-gray-400 text-sm mb-6">
            TonRise - Web3 Crowdfunding Platform based on TON
          </p>
          
          <p className="text-gray-300 text-sm mb-8">
            We are gearing up to launch our platform and are in the active stage of development 
            to bring you innovative and user-friendly solutions. During this pre-launch phase, 
            we are opening up donations in TON cryptocurrency to accelerate development and 
            ensure we deliver top-notch features.
          </p>

          <div className="mb-8">
            <h2 className="text-blue-400 mb-4">Rise Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Active for</span>
                <span className="text-blue-400">6 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Rise Target</span>
                <span className="text-blue-400">1000 TON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">$RISE Reward</span>
                <span className="text-blue-400">10 % $RISE</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-400 mb-4">Rise Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProjectPage;
