
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

const Farm = () => {
  const [timeLeft, setTimeLeft] = useState('00:30:42');
  const [progress] = useState(800);
  const totalRise = 1000;

  useEffect(() => {
    // Timer logic would go here
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-ton-dark">
      <div className="container max-w-lg mx-auto p-4 flex flex-col items-center">
        <div className="w-32 h-32 mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-ton-dark rounded-full" />
          </div>
          <img
            src="/lovable-uploads/07dcb611-f17b-440f-a523-ce795a8f1e14.png"
            alt="$RISE token"
            className="w-full h-full"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">133769 $RISE</h1>
        <p className="text-gray-400 mb-8">Farm $RISE to upgrade your reputation</p>

        <Button 
          className="w-full mb-6 text-lg py-6 bg-blue-600 hover:bg-blue-700"
        >
          Claim
        </Button>

        <div className="w-full mb-4">
          <Progress
            value={(progress / totalRise) * 100}
            className="h-2 mb-2"
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{progress}/{totalRise} $RISE</span>
            <span className="text-gray-400">Come back in {timeLeft} to claim</span>
          </div>
        </div>

        <div className="glass-card w-full p-4 cursor-pointer mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">$RISE Airdrop</h2>
              <p className="text-sm text-gray-400">Learn more about our token</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Farm;
