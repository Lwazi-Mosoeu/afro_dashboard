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
  { month: "Jan", signups: 140, churn: 25 },
  { month: "Feb", signups: 180, churn: 40 },
  { month: "Mar", signups: 160, churn: 35 },
  { month: "Apr", signups: 200, churn: 45 },
  { month: "May", signups: 220, churn: 38 },
  { month: "Jun", signups: 240, churn: 30 },
];

const chartConfig = {
  signups: {
    label: "New Signups",
    color: "#3b82f6",
    cssVar: "--color-signups",
  },
  churn: {
    label: "Churned Users",
    color: "#ef4444",
    cssVar: "--color-churn",
  },
};

export function BarCharts() {
  return (
    <div className="h-24">
      <Card>
        <CardHeader>
          <CardTitle>User Growth vs Churn</CardTitle>
          <CardDescription>
            Monthly signups and churn rate trends
          </CardDescription>
        </CardHeader>
        <div>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart data={chartData}>
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
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="signups"
                  fill={chartConfig.signups.color}
                  radius={8}
                />
                <Bar
                  dataKey="churn"
                  fill={chartConfig.churn.color}
                  radius={8}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </div>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Comparing new signups and user churn for the past 6 months.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
