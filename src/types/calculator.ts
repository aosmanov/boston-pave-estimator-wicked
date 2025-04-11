
export type Material = {
  id: string;
  name: string;
  description: string;
  pricePerSqFt: number;
  image: string;
};

export type Feature = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type CalculatorState = {
  length: number;
  width: number;
  material: string;
  features: string[];
};
