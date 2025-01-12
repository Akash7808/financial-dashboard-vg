import React, { useState } from "react";

const Filters = ({ data, setFilteredData }) => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [revenueRange, setRevenueRange] = useState({ min: "", max: "" });

  const applyFilters = () => {
    let filtered = data;

    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter(
        (item) =>
          new Date(item.date) >= new Date(dateRange.start) &&
          new Date(item.date) <= new Date(dateRange.end)
      );
    }

    if (revenueRange.min && revenueRange.max) {
      filtered = filtered.filter(
        (item) =>
          item.revenue >= parseFloat(revenueRange.min) &&
          item.revenue <= parseFloat(revenueRange.max)
      );
    }

    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 bg-white p-6 rounded shadow-lg">
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-2">Date Range:</label>
        <div className="flex space-x-3">
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-2">Revenue Range:</label>
        <div className="flex space-x-3">
          <input
            type="number"
            placeholder="Min"
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            onChange={(e) => setRevenueRange({ ...revenueRange, min: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max"
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            onChange={(e) => setRevenueRange({ ...revenueRange, max: e.target.value })}
          />
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
