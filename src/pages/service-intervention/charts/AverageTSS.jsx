"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  { result: "Result Good", attempts: 3.2, successes: 2.8 },
  { result: "Result Poor", attempts: 4.5, successes: 2.1 },
  { result: "Unable to Assess", attempts: 1.8, successes: 0.5 },
];

const chartConfig = {
  attempts: {
    label: "Average TSS Contact Attempts",
    color: "#000000",
  },
  successes: {
    label: "Average Successful TSS Contacts",
    color: "#9333ea",
  },
};

export function AverageTSS() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>TSS Contact Metrics</CardTitle>
        <CardDescription>
          Average contact attempts and successes
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="result"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="attempts"
              type="natural"
              fill="var(--color-attempts)"
              fillOpacity={0.2}
              stroke="var(--color-attempts)"
              strokeWidth={2}
            />
            <Area
              dataKey="successes"
              type="natural"
              fill="var(--color-successes)"
              fillOpacity={0.2}
              stroke="var(--color-successes)"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
