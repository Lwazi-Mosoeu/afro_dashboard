"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "January", registeredUsers: 4200, activeUsers: 3800 },
  { month: "February", registeredUsers: 5100, activeUsers: 4100 },
  { month: "March", registeredUsers: 4800, activeUsers: 3950 },
  { month: "April", registeredUsers: 6200, activeUsers: 4300 },
  { month: "May", registeredUsers: 7100, activeUsers: 4600 },
  { month: "June", registeredUsers: 7900, activeUsers: 4900 },
];

const chartConfig = {
  registeredUsers: {
    label: "Registered Users",
    color: "#3b82f6",
    cssVar: "--color-registeredUsers",
  },
  activeUsers: {
    label: "Active Users (30d)",
    color: "#10b981",
    cssVar: "--color-activeUsers",
  },
};

export function AreaLegend() {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>User Growth Trends</CardTitle>
          <CardDescription>
            Monthly comparison of registered vs. active users
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="activeUsers"
                type="natural"
                fill="var(--color-activeUsers)"
                fillOpacity={0.4}
                stroke="var(--color-activeUsers)"
                stackId="a"
              />
              <Area
                dataKey="registeredUsers"
                type="natural"
                fill="var(--color-registeredUsers)"
                fillOpacity={0.4}
                stroke="var(--color-registeredUsers)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                {/*Footer<TrendingUp className="h-4 w-4" />*/}
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {/*Footer<TrendingUp className="h-4 w-4" />*/}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
