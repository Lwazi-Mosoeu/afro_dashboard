"use client";

import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

interface ChartData {
  month: string;
  value: number;
}

const chartData: ChartData[] = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 73 },
  { month: "May", value: 209 },
  { month: "Jun", value: 214 },
];

export function MiniLineChart() {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <div className="h-20 w-full">
          {" "}
          {/* Fixed height container */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                height={15} // Reduced XAxis height
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
