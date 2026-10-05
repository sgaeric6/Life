export interface PaymentRequest {
  id: string;
  playerId: string;
  amount: number; // in Naira
  gameCash: number; // calculated as amount * 1000
  status: 'pending' | 'accepted' | 'rejected';
  paymentMethod?: string;
  proofUrl?: string;
  createdAt: string;
  completedAt?: string;
}

export class PaymentService {
  static createPaymentRequest(playerId: string, amount: number): PaymentRequest {
    return {
      id: `pay_${Date.now()}`,
      playerId,
      amount,
      gameCash: amount * 1000, // 1 Naira = 1000 Game Cash
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
  }

  static approvePayment(request: PaymentRequest): PaymentRequest {
    return {
      ...request,
      status: 'accepted',
      completedAt: new Date().toISOString(),
    };
  }

  static rejectPayment(request: PaymentRequest): PaymentRequest {
    return {
      ...request,
      status: 'rejected',
      completedAt: new Date().toISOString(),
    };
  }

  static validatePayment(amount: number): boolean {
    // Minimum: 1 Naira, Maximum: 1,000,000 Naira per transaction
    return amount >= 1 && amount <= 1000000;
  }
}
