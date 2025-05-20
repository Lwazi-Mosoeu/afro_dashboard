"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ActivityChart() {
  const [loginHistory, setLoginHistory] = useState([]);
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

  const getMonthlyLoginCounts = () => {
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

    // Initialize counts for all months
    const monthlyCounts = months.map((month) => ({
      month,
      count: 0,
    }));

    // Count ALL login events
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

  const chartConfig = {
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
              tickFormatter={(month) => month.slice(0, 3)}
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
