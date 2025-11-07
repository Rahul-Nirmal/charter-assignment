import React, { useEffect, useState } from "react";
import transactions from "../data/transactions";
import { groupByCustomer } from "../utils/rewardUtils";
import CustomerRewards from "./CustomerRewards";
import "./RewardsTable.css";

const RewardsTable = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const grouped = groupByCustomer(transactions);
      setRewards(grouped);
    }, 1000);
  }, []);

  return (
    <div className="rewards-container">
      <h2>Customer Rewards Summary</h2>
      {rewards.map((data) => (
        <div className="customer-section" key={data.customer}>
          <CustomerRewards {...data} />
        </div>
      ))}
    </div>
  );
};

export default RewardsTable;