import React, { useEffect, useState } from "react";
import { groupByCustomer } from "../utils/rewardUtils";
import CustomerRewards from "./CustomerRewards";
import "./RewardsTable.css";

const RewardsTable = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    fetch("/data/transactions.json")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setRewards(groupByCustomer(data)))
      .catch(() => setRewards([]));
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