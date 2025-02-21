
import React from 'react';
import { Home, User, Leaf, Users, CloudRain } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: User, label: 'Profile' },
  { icon: Leaf, label: 'Farm' },
  { icon: Users, label: 'Friends' },
  { icon: CloudRain, label: 'Airdrop' },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-card rounded-none border-t border-gray-800">
      <div className="flex justify-around items-center py-4 px-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "flex flex-col items-center space-y-1",
              item.active ? "text-ton-primary" : "text-gray-400"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
