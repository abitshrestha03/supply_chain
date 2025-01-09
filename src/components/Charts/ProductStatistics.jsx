import React from 'react';

const ProductStatistics = ({ sales }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Product Sales Statistics</h3>
      <p className="text-2xl font-bold">{sales.units} Units</p>
      <p className="text-green-500">+{sales.percentage}% vs Last Month</p>
      {/* Add a placeholder for a chart (use a library like Chart.js if needed) */}
      <div className="h-32 mt-4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default ProductStatistics;
