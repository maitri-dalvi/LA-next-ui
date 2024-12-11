"use client";

import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 400000, expense: 124000 },
  { name: "Feb", income: 300000, expense: 116398 },
  { name: "Mar", income: 200000, expense: 119800 },
  { name: "Apr", income: 270080, expense: 130908 },
  { name: "May", income: 189000, expense: 104800 },
  { name: "Jun", income: 239000, expense: 131800 },
  { name: "Jul", income: 379000, expense: 141300 },
  { name: "Aug", income: 259000, expense: 104300 },
  { name: "Sep", income: 340090, expense: 104300 },
  { name: "Oct", income: 223490, expense: 126300 },
  { name: "Nov", income: 323490, expense: 174300 },
  { name: "Dec", income: 199390, expense: 100300 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#B0BEC5" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#B0BEC5" }} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          {/* Income Area */}
          <Area
            type="monotone"
            dataKey="income"
            stroke="#388E3C"  // Dark Green for the stroke
            fill="#A5D6A7"    // Light Pastel Green for the fill
            fillOpacity={0.6}  // Slight transparency for the fill
            strokeWidth={2}
            activeDot={{ r: 8 }}  // Adding a dot on hover for emphasis
          />
          {/* Expense Area */}
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#0288D1"  // Dark Blue for the stroke
            fill="#81D4FA"    // Soft Pastel Blue for the fill
            fillOpacity={0.6}  // Slight transparency for the fill
            strokeWidth={2}
            activeDot={{ r: 8 }}  // Adding a dot on hover for emphasis
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

