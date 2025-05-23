"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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

type ChartDataItem = {
  quarter: string;
  pep: number;
  prep: number;
};

type ChartConfigItem = {
  label: string;
  color: string;
};

type ChartConfig = {
  [key: string]: ChartConfigItem;
};

const chartData: ChartDataItem[] = [
  { quarter: "2020Q3", pep: 50, prep: 15 },
  { quarter: "2020Q4", pep: 50, prep: 15 },
  { quarter: "2021Q1", pep: 50, prep: 15 },
  { quarter: "2021Q2", pep: 50, prep: 15 },
];

const chartConfig: ChartConfig = {
  pep: {
    label: "PEP",
    color: "#10b981",
  },
  prep: {
    label: "PrEP",
    color: "#f59e0b",
  },
};

export function ProgrameEnrolment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Program Enrollment</CardTitle>
        <CardDescription>Quarterly Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
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
            <Bar dataKey="pep" fill="var(--color-pep)" radius={4} />
            <Bar dataKey="prep" fill="var(--color-prep)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
