
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/BottomNav';
import { Info } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen pb-24 bg-ton-dark">
      <div className="container max-w-lg mx-auto p-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src="/lovable-uploads/e90383a6-3144-4f25-a354-8bc3a36de3a0.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-700"
            />
            <div className="absolute -top-2 left
-1/2 transform translate-x-1/2 flex gap-1">
              {['🎨', '🌟', '🚀'].map((emoji, index) => (
                <span
                  key={index}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 mb-4">
            <Badge className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              REPUTATION LEVEL - 7
            </Badge>
          </div>

          <h1 className="text-2xl font-bold mb-1">Klim Azarin</h1>
          <p className="text-gray-400 mb-4">Art Director at TonRise</p>

          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 mb-8 gap-2"
          >
            Badges <Info size={16} />
          </Button>

          <div className="w-full space-y-4">
            <div className="glass-card p-4 rounded-xl relative overflow-hidden">
              <img
                src="/lovable-uploads/d6a7efb2-e73b-4999-9cd7-62042b058b0b.png"
                alt="TonRise Crowdfunding"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative flex justify-between items-center">
                <h3 className="text-lg font-semibold">TonRise Crowdfunding</h3>
                <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20">
                  More
                </Button>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4"
                alt="Minting NFT Badges"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative flex justify-between items-center">
                <h3 className="text-lg font-semibold">Minting NFT Badges</h3>
                <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20">
                  More
                </Button>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full text-blue-400 hover:text-blue-500 hover:bg-blue-500/10"
            >
              Create New +
            </Button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;
