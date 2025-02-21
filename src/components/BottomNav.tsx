
import React from 'react';
import { Home, User, Leaf, Users, CloudRain } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Leaf, label: 'Farm', path: '/farm' },
  { icon: Users, label: 'Friends', path: '/friends' },
  { icon: CloudRain, label: 'Airdrop', path: '/airdrop' },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-card rounded-none border-t border-gray-800">
      <div className="flex justify-around items-center py-4 px-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex flex-col items-center space-y-1",
              location.pathname === item.path ? "text-ton-primary" : "text-gray-400"
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
