export const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100) + 1 * 50;
  } else if (amount > 50) {
    points += 1 * (amount - 50);
  }
  return points;
};

export const groupByCustomer = (data) => {
  const result = [];

  const customers = [...new Set(data.map((t) => t.customer))];

  customers.forEach((customer) => {
    const customerTransactions = data.filter((t) => t.customer === customer);

    
    const monthlyPoints = new Map();
    const transactions = customerTransactions.map(({ date, amount }) => {
      const month = new Date(date).toLocaleString("default", { month: "long" });
      const points = calculatePoints(amount);

      monthlyPoints.set(month, (monthlyPoints.get(month) || 0) + points);

      return { date, amount, points, month };
    });

    const monthlyPointsArray = [...monthlyPoints].map(([month, points]) => ({
      month,
      points,
    }));

    const totalPoints = transactions.reduce((sum, t) => sum + t.points, 0);
    const totalSpend = transactions.reduce((sum, t) => sum + t.amount, 0);

    result.push({
      customer,
      transactions,
      monthlyPoints: monthlyPointsArray,
      totalPoints,
      totalSpend,
    });
  });

  return result;
};