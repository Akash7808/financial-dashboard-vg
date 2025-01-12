import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import SortControls from "./components/SortControls";
import DataTable from "./components/DataTable";
import SummaryCards from "./components/SummaryCards";

const API_URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_API_KEY}`;
console.log(API_URL);
const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500 font-semibold text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <header className="bg-blue-600 text-white p-4 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">Financial Data Dashboard</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCards data={filteredData} />
      </section>

      <section className="bg-white shadow-md rounded p-6">
        <Filters data={data} setFilteredData={setFilteredData} />
      </section>

      <section className="bg-white shadow-md rounded p-6">
        <SortControls data={data} setFilteredData={setFilteredData} />
      </section>

      <section className="bg-white shadow-md rounded p-6 overflow-x-auto">
        <DataTable data={filteredData} />
      </section>
    </div>
  );
};

export default App;
