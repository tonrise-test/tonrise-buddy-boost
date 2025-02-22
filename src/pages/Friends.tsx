
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

const friends = [
  { id: 1, name: 'Olivia Rose', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
  { id: 2, name: 'Ethan Carter', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857' },
  { id: 3, name: 'Ava Lee', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b' },
  { id: 4, name: 'Noah James', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { id: 5, name: 'Harper Green', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { id: 6, name: 'Benjamin Thomas', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a' },
  { id: 7, name: 'Scarlett Jones', image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e' },
];

const Friends = () => {
  return (
    <div className="min-h-screen bg-ton-dark pb-24">
      <div className="container max-w-lg mx-auto p-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24">
            <img
              src="/lovable-uploads/aacd23b1-4c32-4d1f-b506-3da068717ad3.png"
              alt="Community"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold mt-4 mb-1">Your Community</h1>
          <p className="text-gray-400 text-sm">All friends you're invited</p>
        </div>

        <div className="space-y-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">{friend.name}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-400 hover:text-blue-500 hover:bg-blue-500/10"
              >
                <UserPlus size={20} />
              </Button>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          className="w-full mt-6 text-blue-400 hover:text-blue-500 hover:bg-blue-500/10 flex items-center gap-2"
        >
          <UserPlus size={20} />
          Invite Friends
        </Button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Friends;
