
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface DimensionsInputProps {
  length: number;
  width: number;
  onLengthChange: (value: number) => void;
  onWidthChange: (value: number) => void;
}

const DimensionsInput: React.FC<DimensionsInputProps> = ({
  length,
  width,
  onLengthChange,
  onWidthChange
}) => {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onLengthChange(isNaN(value) ? 0 : value);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onWidthChange(isNaN(value) ? 0 : value);
  };

  return (
    <Card className="p-6 bg-white shadow-md animate-fade-in">
      <h3 className="text-xl font-bold text-boston-navy mb-4">Driveway Dimensions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="length" className="text-gray-700">Length (feet)</Label>
          <Input
            id="length"
            type="number"
            min="0"
            value={length || ''}
            onChange={handleLengthChange}
            className="border-gray-300 focus:border-boston-navy focus:ring-boston-navy"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="width" className="text-gray-700">Width (feet)</Label>
          <Input
            id="width"
            type="number"
            min="0"
            value={width || ''}
            onChange={handleWidthChange}
            className="border-gray-300 focus:border-boston-navy focus:ring-boston-navy"
          />
        </div>
      </div>
      <div className="mt-4 bg-gray-50 p-3 rounded-md border border-gray-200">
        <p className="text-gray-600">Area: <span className="font-semibold text-boston-navy">{length * width} sq ft</span></p>
      </div>
    </Card>
  );
};

export default DimensionsInput;
