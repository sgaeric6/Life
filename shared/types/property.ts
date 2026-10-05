export interface Property {
  id: string;
  ownerId: string;
  name: string;
  type: 'residential' | 'commercial' | 'luxury' | 'investment';
  location: string;
  purchasePrice: number;
  monthlyIncome: number;
  purchasedAt: Date;
  value: number;
}

export interface Business {
  id: string;
  ownerId: string;
  name: string;
  type: string;
  location: string;
  initialInvestment: number;
  monthlyIncome: number;
  profitMargin: number;
  createdAt: Date;
}

export interface Investment {
  id: string;
  playerId: string;
  type: string;
  amount: number;
  returnRate: number; // percentage
  createdAt: Date;
}
