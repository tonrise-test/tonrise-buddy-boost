
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, X, Paperclip } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MainInformationProps {
  initialData: any;
  onNext: (data: any) => void;
  onExit: () => void;
}

const MainInformation: React.FC<MainInformationProps> = ({
  initialData,
  onNext,
  onExit,
}) => {
  const [formData, setFormData] = useState({
    projectName: initialData.projectName || '',
    shortDescription: initialData.shortDescription || '',
    category: initialData.category || '',
    gallery: initialData.gallery || [],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      gallery: [...prev.gallery, ...files],
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Main Information</h2>

      <div className="space-y-4">
        <div>
          <Label>Project Name</Label>
          <Input
            placeholder="Enter project name"
            value={formData.projectName}
            onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
            className="bg-gray-900"
          />
        </div>

        <div>
          <Label>Short Description</Label>
          <Input
            placeholder="Brief description of your project"
            value={formData.shortDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
            className="bg-gray-900"
          />
        </div>

        <div>
          <Label>Project Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger className="bg-gray-900">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web3">Web3</SelectItem>
              <SelectItem value="defi">DeFi</SelectItem>
              <SelectItem value="nft">NFT</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Project Gallery</Label>
          <div className="space-y-2">
            {formData.gallery.map((file: File, index: number) => (
              <div key={index} className="flex items-center justify-between bg-gray-900 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                    <Paperclip className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-400">{file.type}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center justify-center h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Paperclip className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-sm text-blue-400">Attach file</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                />
              </label>
            </div>
          </div>
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

export default MainInformation;
