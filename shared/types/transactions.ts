export interface GameTransaction {
  id: string;
  playerId: string;
  type: 'salary' | 'transfer' | 'expense' | 'investment' | 'income';
  amount: number;
  category?: string;
  description: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface PlayerWallet {
  playerId: string;
  balance: number;
  monthly_income: number;
  total_spent: number;
}

export interface TransferRequest {
  from: string;
  to: string;
  amount: number;
  message?: string;
}
