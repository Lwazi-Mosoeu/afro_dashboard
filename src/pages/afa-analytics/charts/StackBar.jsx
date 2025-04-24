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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    month: "Jan",
    technical: 142,
    billing: 58,
    featureRequests: 89,
  },
  {
    month: "Feb",
    technical: 128,
    billing: 62,
    featureRequests: 93,
  },
  {
    month: "Mar",
    technical: 165,
    billing: 45,
    featureRequests: 107,
  },
  {
    month: "Apr",
    technical: 118,
    billing: 51,
    featureRequests: 124,
  },
  {
    month: "May",
    technical: 95,
    billing: 48,
    featureRequests: 142,
  },
  {
    month: "Jun",
    technical: 82,
    billing: 39,
    featureRequests: 158,
  },
];

const chartConfig = {
  technical: {
    label: "Technical Issues",
    color: "#ef4444",
    cssVar: "--color-technical",
  },
  billing: {
    label: "Billing Questions",
    color: "#f97316",
    cssVar: "--color-billing",
  },
  featureRequests: {
    label: "Feature Requests",
    color: "#10b981",
    cssVar: "--color-featureRequests",
  },
};

export function StackBar() {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Support Ticket Analysis</CardTitle>
          <CardDescription>
            Monthly breakdown of support tickets by category
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="technical"
                stackId="a"
                fill="var(--color-technical)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="billing"
                stackId="a"
                fill="var(--color-billing)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="featureRequests"
                stackId="a"
                fill="var(--color-featureRequests)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {/*Footer<TrendingUp className="h-4 w-4" />*/}
          </div>
          <div className="leading-none text-muted-foreground">
            {/*Footer<TrendingUp className="h-4 w-4" />*/}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
