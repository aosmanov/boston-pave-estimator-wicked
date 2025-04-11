
import React from 'react';
import { MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-boston-navy py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-boston-cream text-2xl md:text-3xl font-bold">Boston Pave</h1>
          <div className="hidden md:flex items-center text-boston-cream/80 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>Serving Greater Boston Area</span>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-boston-gold font-bold">Call for a Free Quote:</div>
          <div className="text-white text-lg">617-555-PAVE</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
