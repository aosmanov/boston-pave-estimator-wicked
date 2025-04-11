
import React, { useState } from 'react';
import Header from '@/components/Header';
import BostonFooter from '@/components/BostonFooter';
import DimensionsInput from '@/components/DimensionsInput';
import MaterialSelector from '@/components/MaterialSelector';
import FeatureSelector from '@/components/FeatureSelector';
import CostSummary from '@/components/CostSummary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CalculatorState } from '@/types/calculator';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    length: 24,
    width: 12,
    material: 'asphalt',
    features: []
  });

  const handleLengthChange = (length: number) => {
    setCalculatorState(prev => ({ ...prev, length }));
  };

  const handleWidthChange = (width: number) => {
    setCalculatorState(prev => ({ ...prev, width }));
  };

  const handleMaterialChange = (material: string) => {
    setCalculatorState(prev => ({ ...prev, material }));
  };

  const handleFeaturesChange = (features: string[]) => {
    setCalculatorState(prev => ({ ...prev, features }));
  };

  const handleGetQuote = () => {
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you shortly with a detailed quote for your driveway project.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative w-full bg-boston-navy py-12 md:py-24 overflow-hidden">
          <div className="boston-pattern absolute inset-0"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Boston Driveway Cost Calculator</h1>
              <p className="text-xl text-boston-cream mb-8">Estimate your driveway paving costs with our easy-to-use calculator. Designed specifically for Boston's unique requirements and aesthetics.</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-boston-brick hover:bg-boston-brick/90 text-white"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent text-boston-cream border-boston-cream hover:bg-boston-cream/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calculator section */}
        <div id="calculator" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-boston-navy text-center mb-2">Driveway Cost Estimator</h2>
          <p className="text-gray-600 text-center mb-10">Customize your driveway project and get an instant cost estimate</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-7 space-y-6">
              <DimensionsInput 
                length={calculatorState.length}
                width={calculatorState.width}
                onLengthChange={handleLengthChange}
                onWidthChange={handleWidthChange}
              />
              
              <MaterialSelector 
                selectedMaterial={calculatorState.material}
                onMaterialChange={handleMaterialChange}
              />
              
              <FeatureSelector 
                selectedFeatures={calculatorState.features}
                onFeaturesChange={handleFeaturesChange}
              />
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <CostSummary 
                length={calculatorState.length}
                width={calculatorState.width}
                materialId={calculatorState.material}
                selectedFeatures={calculatorState.features}
              />
              
              <Card className="p-6 bg-white shadow-md">
                <h3 className="text-xl font-bold text-boston-navy mb-4">Ready for a Professional Quote?</h3>
                <p className="text-gray-600 mb-4">Get a detailed quote from our Boston paving experts. We'll contact you to discuss your project requirements and provide an accurate estimate.</p>
                <Button 
                  onClick={handleGetQuote}
                  className="w-full bg-boston-brick hover:bg-boston-brick/90 text-white"
                >
                  Request a Free Quote
                </Button>
              </Card>
            </div>
          </div>
          
          {/* Why choose us section */}
          <div className="mt-16 mb-10">
            <h2 className="text-3xl font-bold text-boston-navy text-center mb-10">Why Choose Boston Pave</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-boston-navy">
                <h3 className="text-xl font-bold text-boston-navy mb-3">Local Experience</h3>
                <p className="text-gray-600">Over 35 years of experience serving the unique needs of Boston homeowners and businesses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-boston-brick">
                <h3 className="text-xl font-bold text-boston-navy mb-3">Weather-Proof Materials</h3>
                <p className="text-gray-600">Our materials and techniques are specifically chosen to withstand harsh New England winters.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-boston-gold">
                <h3 className="text-xl font-bold text-boston-navy mb-3">Award-Winning Service</h3>
                <p className="text-gray-600">Recognized for excellence by the Boston Contractors Association for 5 consecutive years.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BostonFooter />
    </div>
  );
};

export default Index;
