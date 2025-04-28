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
  { quarter: "2020Q3", patients: 900, total: 1200 },
  { quarter: "2020Q4", patients: 1050, total: 1350 },
  { quarter: "2021Q1", patients: 1200, total: 1500 },
  { quarter: "2021Q2", patients: 1350, total: 1650 },
];

const chartConfig = {
  patients: {
    label: "Patients With File Updates",
    color: "#3b82f6",
  },
  total: {
    label: "Total File Updates",
    color: "#e5e7eb",
  },
};

export function FileUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File Updates</CardTitle>
        <CardDescription>Quarterly Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 1500]}
              ticks={[0, 300, 600, 900, 1200, 1500]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="quarter"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="patients" fill="var(--color-patients)" radius={4} />
            <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
