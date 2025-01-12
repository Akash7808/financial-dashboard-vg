import React, { useState } from "react";

const SortControls = ({ data, setFilteredData }) => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);

    let sortedData = [...data];
    if (selectedSort === "revenueLowToHigh") {
      sortedData.sort((a, b) => a.revenue - b.revenue);
    } else if (selectedSort === "revenueHighToLow") {
      sortedData.sort((a, b) => b.revenue - a.revenue);
    } else if (selectedSort === "dateEarliestToLatest") {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedSort === "dateLatestToEarliest") {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSort === "netIncomeLowToHigh") {
      sortedData.sort((a, b) => a.netIncome - b.netIncome);
    } else if (selectedSort === "netIncomeHighToLow") {
      sortedData.sort((a, b) => b.netIncome - a.netIncome);
    }

    setFilteredData(sortedData);
  };

  const handleReset = () => {
    setSortBy("");
    setFilteredData(data);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="text-gray-700 font-semibold">Sort by:</label>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
      >
        <option value="">Select...</option>
        <option value="revenueLowToHigh">Revenue (Low to High)</option>
        <option value="revenueHighToLow">Revenue (High to Low)</option>
        <option value="dateEarliestToLatest">Date (Earliest to Latest)</option>
        <option value="dateLatestToEarliest">Date (Latest to Earliest)</option>
        <option value="netIncomeLowToHigh">Net Income (Low to High)</option>
        <option value="netIncomeHighToLow">Net Income (High to Low)</option>
      </select>
      <button
        onClick={handleReset}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
      >
        Reset
      </button>
    </div>
  );
};

export default SortControls;
