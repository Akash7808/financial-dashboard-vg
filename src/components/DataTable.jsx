import React from "react";
import { formatNumber } from "../utils/formatNumber";

const DataTable = ({ data }) => {
  return (
    <table className="table-auto w-full text-left border-collapse border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Date</th>
          <th className="border border-gray-300 px-4 py-2 text-right">Revenue</th>
          <th className="border border-gray-300 px-4 py-2 text-right">Net Income</th>
          <th className="border border-gray-300 px-4 py-2 text-right">Gross Profit</th>
          <th className="border border-gray-300 px-4 py-2 text-right">EPS</th>
          <th className="border border-gray-300 px-4 py-2 text-right">Operating Income</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
            <td className="border border-gray-300 px-4 py-2">{item.date}</td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              {formatNumber(item.revenue)}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              {formatNumber(item.netIncome)}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              {formatNumber(item.grossProfit)}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">{item.eps}</td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              {formatNumber(item.operatingIncome)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
