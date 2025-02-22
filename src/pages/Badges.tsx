
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const badges = [
  { id: 1, name: 'BY-PASS', color: 'gray-400' },
  { id: 2, name: 'SUPPORT!', color: 'blue-400' },
  { id: 3, name: 'HELPER', color: 'red-400' },
  { id: 4, name: 'SPONSOR', color: 'orange-400' },
  { id: 5, name: 'PROTECT', color: 'brown-400' },
  { id: 6, name: 'VISIONARY', color: 'yellow-400' },
  { id: 7, name: 'ANGEL', color: 'gray-400' },
];

const Badges = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ton-dark">
      <div className="container max-w-lg mx-auto p-4">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/profile')}
            className="text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold ml-2">NFT Badges</h1>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-sm text-gray-400">Collected NFT Badges</h2>
          <p className="text-3xl font-bold">{badges.length}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white/90">
                  {badge.id}
                </span>
                <span className={`text-sm font-medium text-${badge.color} mt-2`}>
                  {badge.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
