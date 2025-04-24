"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KPICard({ data, className = "" }) {
  const isPositive = data.trend === "up";

  return (
    <Card className={`h-full flex flex-col ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col ">
        <div className="text-2xl font-bold">{data.value}</div>
        <div
          className={`flex items-center text-xs ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="h-3 w-3 mr-1" />
          ) : (
            <ArrowDown className="h-3 w-3 mr-1" />
          )}
          <span>{data.delta}</span>
        </div>
      </CardContent>
    </Card>
  );
}
