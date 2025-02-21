
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FullInformationProps {
  initialData: any;
  onNext: (data: any) => void;
  onExit: () => void;
}

const FullInformation: React.FC<FullInformationProps> = ({
  initialData,
  onNext,
  onExit,
}) => {
  const [formData, setFormData] = useState({
    detailedDescription: initialData.detailedDescription || '',
    targetFunds: initialData.targetFunds || '',
    donorReward: initialData.donorReward || '',
  });

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Full Information</h2>

      <div className="space-y-4">
        <div>
          <Label>Detailed Description</Label>
          <Textarea
            placeholder="Provide a detailed description of your project"
            value={formData.detailedDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, detailedDescription: e.target.value }))}
            className="bg-gray-900 min-h-[200px]"
          />
        </div>

        <div>
          <Label>Target Funds ($TON)</Label>
          <Input
            type="number"
            placeholder="1000"
            value={formData.targetFunds}
            onChange={(e) => setFormData(prev => ({ ...prev, targetFunds: e.target.value }))}
            className="bg-gray-900"
          />
        </div>

        <div>
          <Label>Donor's Reward (%)</Label>
          <Input
            type="number"
            placeholder="10"
            value={formData.donorReward}
            onChange={(e) => setFormData(prev => ({ ...prev, donorReward: e.target.value }))}
            className="bg-gray-900"
          />
          <p className="text-sm text-gray-400 mt-2">
            Everyone, who donated to your Rise will get allocation of $RISE based on their donation
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onExit}>
          Exit
        </Button>
        <div className="space-x-2">
          <Button variant="ghost">Cancel</Button>
          <Button onClick={handleSubmit}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default FullInformation;
