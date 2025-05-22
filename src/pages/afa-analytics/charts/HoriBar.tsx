"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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

// Type definitions
interface ChartDataItem {
  feature: string;
  activeUsers: number;
  newSignups: number;
}

interface ChartConfigItem {
  label: string;
  color: string;
  cssVar?: string; // Optional as it's not used in this component
}

interface ChartConfig {
  [key: string]: ChartConfigItem;
}

// Typed chart data
const chartData: ChartDataItem[] = [
  { feature: "Dashboard", activeUsers: 480, newSignups: 124 },
  { feature: "Reports", activeUsers: 320, newSignups: 95 },
  { feature: "Settings", activeUsers: 270, newSignups: 110 },
  { feature: "Notifications", activeUsers: 190, newSignups: 80 },
  { feature: "Search", activeUsers: 430, newSignups: 98 },
  { feature: "Integrations", activeUsers: 350, newSignups: 135 },
];

// Typed chart configuration
const chartConfig: ChartConfig = {
  activeUsers: {
    label: "Active Users",
    color: "#60a5fa",
  },
  newSignups: {
    label: "New Signups",
    color: "#34d399",
  },
};

export function HoriBar() {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>User Engagement Across Features</CardTitle>
          <CardDescription>
            Active users and new signups for key product features
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ right: 16 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="feature"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <XAxis type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Bar
                dataKey="activeUsers"
                fill={chartConfig.activeUsers.color}
                radius={4}
                barSize={14}
              >
                <LabelList
                  dataKey="feature"
                  position="insideLeft"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
                <LabelList
                  dataKey="activeUsers"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>

              <Bar
                dataKey="newSignups"
                fill={chartConfig.newSignups.color}
                radius={4}
                barSize={14}
              >
                <LabelList
                  dataKey="newSignups"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
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
