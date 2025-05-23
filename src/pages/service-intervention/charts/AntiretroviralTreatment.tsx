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
  current: number;
  pre: number;
};

type ChartConfigItem = {
  label: string;
  color: string;
};

type ChartConfig = {
  [key: string]: ChartConfigItem;
};

const chartData: ChartDataItem[] = [
  { quarter: "2020Q3", current: 450, pre: 150 },
  { quarter: "2020Q4", current: 600, pre: 200 },
  { quarter: "2021Q1", current: 750, pre: 250 },
  { quarter: "2021Q2", current: 900, pre: 300 },
];

const chartConfig: ChartConfig = {
  current: {
    label: "Current on ongoing ART",
    color: "#000000",
  },
  pre: {
    label: "Pre ART",
    color: "#ef4444",
  },
};

export function AntiretroviralTreatment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Antiretroviral Treatment Status</CardTitle>
        <CardDescription>Quarterly Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
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
            <Bar dataKey="current" fill="var(--color-current)" radius={4} />
            <Bar dataKey="pre" fill="var(--color-pre)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
