"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

const chartData = [
  { month: "January", direct: 5000, referral: 1200 },
  { month: "February", direct: 5500, referral: 1400 },
  { month: "March", direct: 6000, referral: 1600 },
  { month: "April", direct: 6500, referral: 1900 },
  { month: "May", direct: 7000, referral: 2200 },
  { month: "June", direct: 7500, referral: 2500 },
];

const chartConfig = {
  direct: {
    label: "Direct Traffic",
    color: "#3b82f6",
  },
  referral: {
    label: "Referral Traffic",
    color: "#10b981",
  },
};

export function MultiBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources Comparison: direct vs referral</CardTitle>

        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-200 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <Bar dataKey="direct" fill="var(--color-direct)" radius={4} />

            <Bar dataKey="referral" fill="var(--color-referral)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing traffic data for the first half of 2024
        </div>{" "}
      </CardFooter>
    </Card>
  );
}
