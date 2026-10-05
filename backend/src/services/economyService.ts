export class EconomyService {
  static paySalary(amount: number) {
    return { type: 'salary', amount, successful: true };
  }

  static transferMoney(from: string, to: string, amount: number) {
    return {
      from,
      to,
      amount,
      type: 'transfer',
      successful: amount > 0,
    };
  }

  static payExpense(amount: number, category: string) {
    return {
      amount,
      category,
      type: 'expense',
      successful: amount > 0,
    };
  }
}
