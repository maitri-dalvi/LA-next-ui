"use client";
import Image from "next/image";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "High",
    count: 35,
    fill: "#FF6F61", // Medium Light Red for High Priority
  },
  {
    name: "Medium",
    count: 53,
    fill: "#64B5F6", // Medium Light Blue for Medium Priority
  },
  {
    name: "Low",
    count: 64,
    fill: "#81C784", // Medium Light Green for Low Priority
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Priority Status</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[70%]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              label
            >
              {/* Assign the colors to each segment */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FF6F61] rounded-full" />
          <h1 className="font-bold">124</h1>
          <h2 className="text-xs text-gray-300">High (35%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#64B5F6] rounded-full" />
          <h1 className="font-bold">189</h1>
          <h2 className="text-xs text-gray-300">Medium (45%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#81C784] rounded-full" />
          <h1 className="font-bold">150</h1>
          <h2 className="text-xs text-gray-300">Low (65%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
