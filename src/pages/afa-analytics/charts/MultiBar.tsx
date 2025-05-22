"use client";

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

interface ChartDataItem {
  month: string;
  direct: number;
  referral: number;
}

interface ChartConfigItem {
  label: string;
  color: string;
  cssVar?: string;
}

interface ChartConfig {
  [key: string]: ChartConfigItem;
}

const chartData: ChartDataItem[] = [
  { month: "January", direct: 5000, referral: 1200 },
  { month: "February", direct: 5500, referral: 1400 },
  { month: "March", direct: 6000, referral: 1600 },
  { month: "April", direct: 6500, referral: 1900 },
  { month: "May", direct: 7000, referral: 2200 },
  { month: "June", direct: 7500, referral: 2500 },
];

const chartConfig: ChartConfig = {
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
    <div className="h-full w-full">
      <Card className="h-full w-full flex flex-col">
        <CardHeader>
          <CardTitle>Traffic Sources Comparison: direct vs referral</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: string) => value.slice(0, 3)}
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
            {/* <TrendingUp className="h-4 w-4" /> */}
          </div>
          <div className="leading-none text-muted-foreground">
            {/* Footer content */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
