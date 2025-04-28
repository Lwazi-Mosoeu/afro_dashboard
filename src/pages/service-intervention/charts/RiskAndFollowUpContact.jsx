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
  {
    result: "Result Good",
    patients: 450,
    attempts: 320,
    successes: 280,
  },
  {
    result: "Result Poor",
    patients: 280,
    attempts: 180,
    successes: 120,
  },
  {
    result: "Unstable To Assess",
    patients: 150,
    attempts: 90,
    successes: 40,
  },
];

const chartConfig = {
  patients: {
    label: "Patient Number",
    color: "#9ca3af",
  },
  attempts: {
    label: "Average TSS contact attempts in 6m",
    color: "#86efac",
  },
  successes: {
    label: "Average successful TSS contacts in 6m",
    color: "#ef4444",
  },
};

export function RiskAndFollowUpContact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk and Follow-Up Contact Metrics</CardTitle>
        <CardDescription>
          Patient contact statistics by assessment result
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 600]}
              ticks={[0, 100, 200, 300, 400, 500, 600]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="result"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="patients"
              fill="var(--color-patients)"
              radius={4}
              // barSize={30}
            />
            <Bar
              dataKey="attempts"
              fill="var(--color-attempts)"
              radius={4}
              // barSize={30}
            />
            <Bar
              dataKey="successes"
              fill="var(--color-successes)"
              radius={4}
              // barSize={20}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
