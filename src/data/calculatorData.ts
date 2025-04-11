
import { Material, Feature } from '../types/calculator';

export const materials: Material[] = [
  {
    id: 'asphalt',
    name: 'Asphalt',
    description: 'Durable and cost-effective, perfect for the Boston climate.',
    pricePerSqFt: 7.50,
    image: '/src/assets/asphalt.jpg'
  },
  {
    id: 'concrete',
    name: 'Concrete',
    description: 'Long-lasting and versatile with various finishing options.',
    pricePerSqFt: 12.75,
    image: '/src/assets/concrete.jpg'
  },
  {
    id: 'pavers',
    name: 'Brick Pavers',
    description: 'Classic Boston style with a timeless appeal.',
    pricePerSqFt: 18.50,
    image: '/src/assets/pavers.jpg'
  },
  {
    id: 'cobblestone',
    name: 'Cobblestone',
    description: 'Historic Beacon Hill charm for a distinctive driveway.',
    pricePerSqFt: 24.25,
    image: '/src/assets/cobblestone.jpg'
  }
];

export const features: Feature[] = [
  {
    id: 'heating',
    name: 'Heating System',
    description: 'Keep your driveway clear during Boston winters.',
    price: 3500
  },
  {
    id: 'drainage',
    name: 'Enhanced Drainage',
    description: 'Proper water management for New England weather.',
    price: 1200
  },
  {
    id: 'edging',
    name: 'Decorative Edging',
    description: 'Elegant borders to enhance your driveway's appearance.',
    price: 850
  },
  {
    id: 'sealing',
    name: 'Premium Sealing',
    description: 'Extra protection against harsh Boston winters.',
    price: 650
  }
];

export const calculateCost = (
  length: number,
  width: number,
  materialId: string,
  selectedFeatures: string[]
): { materialCost: number; featuresCost: number; totalCost: number } => {
  // Calculate area
  const area = length * width;
  
  // Find selected material price
  const material = materials.find(m => m.id === materialId);
  const materialCost = material ? area * material.pricePerSqFt : 0;
  
  // Calculate features cost
  const featuresCost = selectedFeatures.reduce((total, featureId) => {
    const feature = features.find(f => f.id === featureId);
    return total + (feature ? feature.price : 0);
  }, 0);
  
  // Calculate total cost
  const totalCost = materialCost + featuresCost;
  
  return { materialCost, featuresCost, totalCost };
};
