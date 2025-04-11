
import React from 'react';
import { features } from '@/data/calculatorData';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FeatureSelectorProps {
  selectedFeatures: string[];
  onFeaturesChange: (features: string[]) => void;
}

const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  selectedFeatures,
  onFeaturesChange
}) => {
  const handleFeatureToggle = (featureId: string) => {
    const updatedFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(id => id !== featureId)
      : [...selectedFeatures, featureId];
    
    onFeaturesChange(updatedFeatures);
  };

  return (
    <Card className="p-6 bg-white shadow-md animate-fade-in">
      <h3 className="text-xl font-bold text-boston-navy mb-4">Additional Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50">
            <Checkbox
              id={`feature-${feature.id}`}
              checked={selectedFeatures.includes(feature.id)}
              onCheckedChange={() => handleFeatureToggle(feature.id)}
              className="mt-1 data-[state=checked]:bg-boston-brick data-[state=checked]:border-boston-brick"
            />
            <div className="flex-1">
              <Label
                htmlFor={`feature-${feature.id}`}
                className="font-semibold text-gray-800 cursor-pointer flex justify-between"
              >
                {feature.name}
                <span className="text-boston-navy">+${feature.price.toLocaleString()}</span>
              </Label>
              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeatureSelector;
