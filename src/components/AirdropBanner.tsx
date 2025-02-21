
import React from 'react';
import { ChevronRight } from 'lucide-react';

const AirdropBanner = () => {
  return (
    <div className="glass-card p-4 mb-8 cursor-pointer hover:bg-opacity-50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">$RISE Airdrop</h2>
          <p className="text-sm text-gray-400">Learn more about our token</p>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default AirdropBanner;
