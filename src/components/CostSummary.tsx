
import React from 'react';
import { Card } from '@/components/ui/card';
import { materials, features, calculateCost } from '@/data/calculatorData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface CostSummaryProps {
  length: number;
  width: number;
  materialId: string;
  selectedFeatures: string[];
}

const CostSummary: React.FC<CostSummaryProps> = ({
  length,
  width,
  materialId,
  selectedFeatures
}) => {
  const { materialCost, featuresCost, totalCost } = calculateCost(length, width, materialId, selectedFeatures);
  
  const material = materials.find(m => m.id === materialId);
  
  const chartData = [
    { name: 'Material', value: materialCost },
    { name: 'Features', value: featuresCost }
  ];
  
  const COLORS = ['#1A3A5A', '#8B2323'];

  return (
    <Card className="p-6 bg-white shadow-md animate-fade-in">
      <h3 className="text-xl font-bold text-boston-navy mb-4">Cost Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Base Details:</h4>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="flex justify-between py-1">
                <span className="text-gray-600">Dimensions:</span>
                <span>{length} x {width} ft</span>
              </p>
              <p className="flex justify-between py-1">
                <span className="text-gray-600">Area:</span>
                <span>{length * width} sq ft</span>
              </p>
              <p className="flex justify-between py-1">
                <span className="text-gray-600">Material:</span>
                <span>{material?.name || 'Not selected'}</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Cost Breakdown:</h4>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="flex justify-between py-1">
                <span className="text-gray-600">Material Cost:</span>
                <span>${materialCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </p>
              
              {selectedFeatures.length > 0 && (
                <>
                  <p className="flex justify-between py-1">
                    <span className="text-gray-600">Features:</span>
                    <span>${featuresCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </p>
                  <div className="pl-4 border-l-2 border-gray-200 mt-2 mb-2">
                    {selectedFeatures.map(featureId => {
                      const feature = features.find(f => f.id === featureId);
                      return feature ? (
                        <p key={feature.id} className="flex justify-between py-1 text-sm">
                          <span className="text-gray-500">{feature.name}:</span>
                          <span>${feature.price.toLocaleString()}</span>
                        </p>
                      ) : null;
                    })}
                  </div>
                </>
              )}
              
              <div className="border-t border-gray-300 my-2 pt-2">
                <p className="flex justify-between font-bold text-lg">
                  <span>Total Estimate:</span>
                  <span className="text-boston-brick">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-64 md:h-auto flex items-center justify-center">
          {totalCost > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center text-gray-500">
              <p>Enter dimensions and select materials to see cost breakdown</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 bg-boston-cream/20 p-4 rounded-md border border-boston-gold/30">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-boston-navy">Note:</span> This is an estimate only. Actual costs may vary based on site conditions, excavation needs, and other factors. Contact us for a free on-site consultation.
        </p>
      </div>
    </Card>
  );
};

export default CostSummary;
