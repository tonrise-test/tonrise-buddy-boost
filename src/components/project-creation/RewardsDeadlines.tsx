
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

interface RewardsDeadlinesProps {
  initialData: any;
  onPreview: (data: any) => void;
  onExit: () => void;
}

const RewardsDeadlines: React.FC<RewardsDeadlinesProps> = ({
  initialData,
  onPreview,
  onExit,
}) => {
  const [formData, setFormData] = useState({
    riseDeposit: initialData.riseDeposit || 0,
    activeFor: initialData.activeFor || '6 months',
    deleteAfterDeadline: initialData.deleteAfterDeadline || false,
  });

  const handleSubmit = () => {
    onPreview(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Rewards and deadlines</h2>

      <div className="space-y-8">
        <div>
          <Label className="text-blue-400">$RISE Deposit</Label>
          <p className="text-sm text-gray-400 mb-4">
            Everyone, who donated to your Rise will get allocation of $RISE based on their donation
          </p>
          <div className="space-y-4">
            <Slider
              value={[formData.riseDeposit]}
              onValueChange={([value]) => setFormData(prev => ({ ...prev, riseDeposit: value }))}
              max={10000}
              step={100}
              className="w-full"
            />
            <div className="text-right text-sm text-gray-400">
              Available: 133769 $RISE
            </div>
          </div>
        </div>

        <div>
          <Label className="text-blue-400">Rise Deadline</Label>
          <p className="text-sm text-gray-400 mb-4">
            Your rise will be finished after the deadline. If you will reach target funds you'll be able to withdrawal.
            If the rise won't be successful, all funds will go back to donators.
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Active for</span>
            <span className="text-blue-400">{formData.activeFor}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Delete rise after deadline</span>
            <Switch
              checked={formData.deleteAfterDeadline}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, deleteAfterDeadline: checked }))}
            />
          </div>
        </div>

        <p className="text-sm text-gray-400">
          Users do not available to create rises without deadline until 5 Level of reputation.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onExit}>
          Exit
        </Button>
        <div className="space-x-2">
          <Button variant="ghost">Cancel</Button>
          <Button onClick={handleSubmit}>Preview</Button>
        </div>
      </div>
    </div>
  );
};

export default RewardsDeadlines;
