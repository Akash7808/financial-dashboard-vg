import React from "react";
import { formatNumber } from "../utils/formatNumber";

const SummaryCards = ({ data }) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalNetIncome = data.reduce((sum, item) => sum + item.netIncome, 0);
  const totalGrossProfit = data.reduce((sum, item) => sum + item.grossProfit, 0);

  return (
    <>
      <div className="bg-blue-500 text-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Total Revenue</h3>
        <p className="text-2xl font-bold">{formatNumber(totalRevenue)}</p>
      </div>
      <div className="bg-green-500 text-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Net Income</h3>
        <p className="text-2xl font-bold">{formatNumber(totalNetIncome)}</p>
      </div>
      <div className="bg-purple-500 text-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Gross Profit</h3>
        <p className="text-2xl font-bold">{formatNumber(totalGrossProfit)}</p>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Records</h3>
        <p className="text-2xl font-bold">{data.length}</p>
      </div>
    </>
  );
};

export default SummaryCards;
