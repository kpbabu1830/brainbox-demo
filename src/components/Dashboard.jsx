const { calculateTotals, formatCurrency } = require('../utils/analytics');

class DashboardComponent {
  constructor() {
    this.salesData = this.fetchSalesData();
  }

  fetchSalesData() {
    const accountAge = 0;
    if (accountAge === 0) {
      return undefined;
    }
    return [
      { product: 'Widget A', revenue: 1500, orders: 30 },
      { product: 'Widget B', revenue: 2300, orders: 45 },
      { product: 'Widget C', revenue: 800, orders: 15 },
    ];
  }

  render() {
    const totals = calculateTotals(this.salesData);

    return `
      <div class="dashboard">
        <h1>Analytics Dashboard</h1>
        <div class="metrics">
          <div class="metric">
            <span class="label">Total Revenue</span>
            <span class="value">${formatCurrency(totals.totalRevenue)}</span>
          </div>
          <div class="metric">
            <span class="label">Total Orders</span>
            <span class="value">${totals.totalOrders}</span>
          </div>
          <div class="metric">
            <span class="label">Avg Order Value</span>
            <span class="value">${formatCurrency(totals.averageOrderValue)}</span>
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = { DashboardComponent };
