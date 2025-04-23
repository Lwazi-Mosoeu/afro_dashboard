"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const userLoginData = [
  { name: "Jan", logins: 400 },
  { name: "Feb", logins: 300 },
  { name: "Mar", logins: 600 },
  { name: "Apr", logins: 800 },
  { name: "May", logins: 500 },
  { name: "Jun", logins: 900 },
];

function BarChartSample() {
  return (
    <ChartContainer className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userLoginData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="logins"
            fill="#8884d8"
            name="User Logins"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
export default BarChartSample;
