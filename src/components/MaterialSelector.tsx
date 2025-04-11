
import React from 'react';
import { materials } from '@/data/calculatorData';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface MaterialSelectorProps {
  selectedMaterial: string;
  onMaterialChange: (value: string) => void;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  selectedMaterial,
  onMaterialChange
}) => {
  return (
    <Card className="p-6 bg-white shadow-md animate-fade-in">
      <h3 className="text-xl font-bold text-boston-navy mb-4">Select Material</h3>
      <RadioGroup
        value={selectedMaterial}
        onValueChange={onMaterialChange}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {materials.map((material) => (
          <div key={material.id} className="relative">
            <RadioGroupItem
              value={material.id}
              id={`material-${material.id}`}
              className="sr-only peer"
            />
            <Label
              htmlFor={`material-${material.id}`}
              className="flex flex-col h-full border-2 rounded-lg p-4 cursor-pointer 
                peer-data-[state=checked]:border-boston-brick peer-data-[state=checked]:bg-boston-cream/20
                hover:bg-gray-50 transition-all"
            >
              <div className="font-bold text-lg flex justify-between">
                {material.name}
                <span className="text-boston-navy">${material.pricePerSqFt.toFixed(2)}/sq ft</span>
              </div>
              <p className="text-gray-600 mt-1">{material.description}</p>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
};

export default MaterialSelector;
