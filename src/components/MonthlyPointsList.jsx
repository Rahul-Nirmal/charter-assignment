import React from "react";

const MonthlyPointsList = ({ monthlyPoints }) => {
  return (
    <ul>
      {monthlyPoints.map(({ month, points }) => (
        <li key={month}>
          {month}: {points} points
        </li>
      ))}
    </ul>
  );
};

export default MonthlyPointsList;