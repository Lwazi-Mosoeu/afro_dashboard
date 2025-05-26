// src/components/LineChartCard.tsx
"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDatum {
  month: string;
  revenue: number;
  satisfaction: number;
}

const chartData: ChartDatum[] = [
  { month: "January", revenue: 3200, satisfaction: 70 },
  { month: "February", revenue: 3800, satisfaction: 75 },
  { month: "March", revenue: 4200, satisfaction: 78 },
  { month: "April", revenue: 4500, satisfaction: 80 },
  { month: "May", revenue: 4800, satisfaction: 82 },
  { month: "June", revenue: 5000, satisfaction: 85 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6",
  },
  satisfaction: {
    label: "User Satisfaction",
    color: "#34d399",
  },
};

export function LineChartCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Revenue & Satisfaction Over Time</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-64">
        <ChartContainer className="h-full w-full" config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="natural"
              stroke={chartConfig.revenue.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="satisfaction"
              type="natural"
              stroke={chartConfig.satisfaction.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {/* Footer content */}
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        <div className="leading-none text-muted-foreground">{/* Footer */}</div>
      </CardFooter>
    </Card>
  );
}
