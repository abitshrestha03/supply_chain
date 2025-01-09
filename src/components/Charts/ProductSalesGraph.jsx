import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 100 },
  { month: "Mar", value: 200 },
  { month: "Apr", value: 500 },
  { month: "May", value: 700 },
  { month: "Jun", value: 1000 },
  { month: "Jul", value: 800 },
  { month: "Aug", value: 16 },
  { month: "Sep", value: 900 },
  { month: "Oct", value: 800 },
  { month: "Nov", value: 950 },
  { month: "Dec", value: 750 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-sm px-2 py-1 rounded">
        {`${payload[0].value} Units on ${label}, 2024`}
      </div>
    );
  }
  return null;
};

const ProductSalesGraph = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Gradient for the Graph Background */}
          <defs>
            <linearGradient id="graphAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0, 61, 255, 0)" />
              <stop offset="100%" stopColor="#003DFF" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />

          {/* Apply Gradient Fill to the Area Under the Graph */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#003DFF" // Line stroke
            strokeWidth={2}
            fill="url(#graphAreaGradient)" // Gradient fill for the area
          />

          {/* Line Overlay */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#003DFF"
            strokeWidth={2}
            dot={{ stroke: "#003DFF", strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductSalesGraph;
