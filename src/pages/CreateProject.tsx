
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import MainInformation from '@/components/project-creation/MainInformation';
import FullInformation from '@/components/project-creation/FullInformation';
import RewardsDeadlines from '@/components/project-creation/RewardsDeadlines';

type Step = 'main' | 'full' | 'rewards';

const CreateProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('main');
  const [formData, setFormData] = useState({
    projectName: '',
    shortDescription: '',
    category: '',
    gallery: [] as File[],
    detailedDescription: '',
    targetFunds: '',
    donorReward: '',
    riseDeposit: 0,
    activeFor: '6 months',
    deleteAfterDeadline: false,
  });

  const steps: Step[] = ['main', 'full', 'rewards'];
  const progress = ((steps.indexOf(currentStep) + 1) / steps.length) * 100;

  const handleNext = (stepData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleExit = () => {
    navigate('/profile');
  };

  const handlePreview = () => {
    // Handle preview logic here
    console.log('Preview project:', formData);
  };

  return (
    <div className="min-h-screen bg-ton-dark">
      <div className="container max-w-lg mx-auto p-4">
        <Progress value={progress} className="mb-8" />
        
        {currentStep === 'main' && (
          <MainInformation 
            initialData={formData}
            onNext={handleNext}
            onExit={handleExit}
          />
        )}
        
        {currentStep === 'full' && (
          <FullInformation
            initialData={formData}
            onNext={handleNext}
            onExit={handleExit}
          />
        )}
        
        {currentStep === 'rewards' && (
          <RewardsDeadlines
            initialData={formData}
            onPreview={handlePreview}
            onExit={handleExit}
          />
        )}
      </div>
    </div>
  );
};

export default CreateProject;
