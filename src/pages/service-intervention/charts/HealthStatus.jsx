"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: "2017", red: 300, black: 240, blue: 250, gray: 260 },
  { year: "2018", red: 100, black: 250, blue: 260, gray: 270 },
  { year: "2019", red: 205, black: 245, blue: 255, gray: 265 },
  { year: "2020", red: 205, black: 255, blue: 265, gray: 275 },
  { year: "2021", red: 200, black: 260, blue: 270, gray: 280 },
  { year: "Total", red: 200, black: 250, blue: 300, gray: 350 },
];

const chartConfig = {
  red: {
    label: "<200",
    color: "#ef4444",
    cssVar: "--color-red",
  },
  black: {
    label: "200-349",
    color: "#000000",
    cssVar: "--color-black",
  },
  blue: {
    label: "350-499",
    color: "#3b82f6",
    cssVar: "--color-blue",
  },
  gray: {
    label: "≥500",
    color: "#6b7280",
    cssVar: "--color-gray",
  },
};

export function HealthStatus() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Health Status Distribution</CardTitle>
        <CardDescription>2017-2021 with Total</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              ticks={[0, 30, 60, 90, 120]}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="red"
              stackId="a"
              fill="var(--color-red)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="black"
              stackId="a"
              fill="var(--color-black)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="blue"
              stackId="a"
              fill="var(--color-blue)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="gray"
              stackId="a"
              fill="var(--color-gray)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
