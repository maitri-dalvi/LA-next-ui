"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  done: number;
  pending: number;
  ongoing: number;
}

const data: DataPoint[] = [
  { name: "Jan", done: 60, pending: 20, ongoing: 40 },
  { name: "Feb", done: 70, pending: 30, ongoing: 40 },
  { name: "Mar", done: 80, pending: 40, ongoing: 50 },
  { name: "Apr", done: 90, pending: 30, ongoing: 60 },
  { name: "May", done: 65, pending: 35, ongoing: 50 },
  { name: "Jun", done: 75, pending: 40, ongoing: 45 },
  { name: "Jul", done: 85, pending: 25, ongoing: 60 },
  { name: "Aug", done: 90, pending: 20, ongoing: 70 },
  { name: "Sep", done: 80, pending: 30, ongoing: 60 },
  { name: "Oct", done: 70, pending: 50, ongoing: 40 },
  { name: "Nov", done: 85, pending: 30, ongoing: 55 },
  { name: "Dec", done: 90, pending: 20, ongoing: 60 },
];

const NumberChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Cases</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#d1d5db" }}
            angle={-45}
            textAnchor="end"
            interval={1} // Show every second tick
          />
          <YAxis tick={{ fill: "#d1d5db" }} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="done"
            stroke="#81C784"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#64B5F6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="ongoing"
            stroke="#FFB74D"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumberChart;
