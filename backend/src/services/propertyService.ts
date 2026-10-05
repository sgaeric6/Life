export class PropertyService {
  static buyProperty(playerId: string, propertyName: string, price: number) {
    return {
      playerId,
      propertyName,
      price,
      status: 'owned',
      purchasedAt: new Date().toISOString(),
    };
  }

  static getInvestmentPortfolio() {
    return [
      { name: 'Lekki Apartment', value: '₦320,000' },
      { name: 'Yaba Shop', value: '₦220,000' },
      { name: 'Ikoyi Villa', value: '₦1,100,000' },
    ];
  }
}
