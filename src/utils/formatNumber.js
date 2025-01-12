export const formatNumber = (num) => {
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(1)}B`; // Convert to billions
    } else if (num >= 1e6) {
      return `${(num / 1e6).toFixed(1)}M`; // Convert to millions
    } else {
      return num.toLocaleString(); // Add commas for smaller numbers
    }
  };
  