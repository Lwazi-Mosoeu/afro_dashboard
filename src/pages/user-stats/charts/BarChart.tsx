"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface LoginHistoryEntry {
  action: string;
  created_at: string;
  [key: string]: any;
}

interface ChartDataItem {
  month: string;
  count: number;
}

type ChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

export function ActivityChart() {
  const [loginHistory, setLoginHistory] = useState<LoginHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/login-history");
        const data = await response.json();
        setLoginHistory(data);
      } catch (error) {
        console.error("Failed to fetch login history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoginHistory();
  }, []);

  const getMonthlyLoginCounts = (): ChartDataItem[] => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthlyCounts = months.map((month) => ({
      month,
      count: 0,
    }));

    loginHistory.forEach((entry) => {
      if (entry.action === "login") {
        const date = new Date(entry.created_at);
        const monthIndex = date.getMonth();
        monthlyCounts[monthIndex].count++;
      }
    });

    return monthlyCounts;
  };

  const chartData = getMonthlyLoginCounts();

  const chartConfig: ChartConfig = {
    count: {
      label: "Login Events",
      color: "#60A5FA",
    },
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activity Chart</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <p>Loading login data...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly Login Activity</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 120]}
              ticks={[0, 30, 60, 90, 120]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(month: string) => month.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[8, 8, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
