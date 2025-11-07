import React from "react";
import MonthlyPointsList from "./MonthlyPointsList";
import TransactionDetails from "./TransactionDetails";

const CustomerRewards = ({ customer, monthlyPoints, totalPoints, totalSpend, transactions }) => {
  return (
    <div>
      <h3>{customer}</h3>
      <MonthlyPointsList monthlyPoints={monthlyPoints} />
      <TransactionDetails transactions={transactions} />
      <p><strong>Total Spend: ${totalSpend}</strong></p>
      <p><strong>Total Points: {totalPoints}</strong></p>
      <hr />
    </div>
  );
};

export default CustomerRewards;