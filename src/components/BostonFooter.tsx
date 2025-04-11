
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const BostonFooter: React.FC = () => {
  return (
    <footer className="w-full bg-boston-navy text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-boston-gold text-xl font-bold mb-4">Boston Pave</h3>
          <p className="text-gray-300 mb-4">Quality driveway paving services throughout the Greater Boston area since 1985.</p>
          <div className="flex items-center text-gray-300">
            <MapPin size={18} className="mr-2 text-boston-gold" />
            <span>123 Commonwealth Ave, Boston, MA</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-boston-gold text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <Phone size={18} className="mr-2 text-boston-gold" />
              <span>617-555-PAVE (7283)</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail size={18} className="mr-2 text-boston-gold" />
              <span>info@bostonpave.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock size={18} className="mr-2 text-boston-gold" />
              <span>Mon-Fri: 7am-6pm, Sat: 8am-2pm</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-boston-gold text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Asphalt Driveways</li>
            <li>• Concrete Installation</li>
            <li>• Brick & Cobblestone Pavers</li>
            <li>• Driveway Repair & Resurfacing</li>
            <li>• Heated Driveways</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Boston Pave. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default BostonFooter;
