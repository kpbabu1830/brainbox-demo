function calculateTotals(salesData) {
  if (!salesData || salesData.length === 0) {
    return {
      totalRevenue: 0,
      totalOrders: 0,
      averageOrderValue: 0,
    };
  }

  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  return {
    totalRevenue,
    totalOrders,
    averageOrderValue,
  };
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function getTopProducts(salesData, limit = 5) {
  if (!salesData || salesData.length === 0) {
    return [];
  }
  return salesData
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit);
}

module.exports = { calculateTotals, formatCurrency, getTopProducts };
