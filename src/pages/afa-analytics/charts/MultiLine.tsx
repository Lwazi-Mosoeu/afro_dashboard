"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
  email: number;
  social: number;
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
  { month: "January", email: 2500, social: 1800 },
  { month: "February", email: 2800, social: 2200 },
  { month: "March", email: 3000, social: 2500 },
  { month: "April", email: 3200, social: 2800 },
  { month: "May", email: 3500, social: 3000 },
  { month: "June", email: 3800, social: 3300 },
];

const chartConfig: ChartConfig = {
  email: {
    label: "Email Campaigns",
    color: "#ff7f50",
  },
  social: {
    label: "Social Media",
    color: "#32cd32",
  },
};

export function MultiLine() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Email and Social Media</CardTitle>
        <CardDescription>Visits from Email and Social Media</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="email"
              type="monotone"
              stroke="var(--color-email)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="social"
              type="monotone"
              stroke="var(--color-social)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {/* <TrendingUp className="h-4 w-4" /> */}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {/* <TrendingUp className="h-4 w-4" /> */}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
