export interface Wallet {
  playerId: string;
  balance: number;
  currency: 'NGN';
}

export interface Transaction {
  id: string;
  playerId: string;
  amount: number;
  type: 'salary' | 'expense' | 'transfer' | 'investment' | 'business_income';
  description: string;
  timestamp: Date;
}

export interface Business {
  id: string;
  ownerId: string;
  name: string;
  type: string;
  monthlyIncome: number;
  createdAt: Date;
}
