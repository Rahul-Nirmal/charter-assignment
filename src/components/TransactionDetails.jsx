import React from "react";
import "./TransactionDetails.css";

const TransactionDetails = ({ transactions }) => {
  return (
    <div>
      <h4>Transaction Breakdown</h4>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount ($)</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ date, amount, points }, index) => (
            <tr key={index}>
              <td>{new Date(date).toLocaleDateString()}</td>
              <td>{amount.toFixed(2)}</td>
              <td>{points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;