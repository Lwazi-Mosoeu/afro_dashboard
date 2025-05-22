// src/types/shadcn-chart.d.ts
import * as React from "react";
import * as Recharts from "recharts";

declare module "@/components/ui/chart" {
  interface ChartConfig {
    [key: string]: {
      label?: string;
      color?: string;
      cssVar?: string;
      theme?: {
        light?: string;
        dark?: string;
      };
      icon?: React.ComponentType<{ className?: string }>;
    };
  }

  export const ChartContainer: React.FC<{
    id?: string;
    className?: string;
    config: ChartConfig;
    children: React.ReactNode;
  }>;

  export const ChartTooltip: typeof Recharts.Tooltip;

  export const ChartTooltipContent: React.FC<{
    active?: boolean;
    payload?: any[];
    className?: string;
    indicator?: "dot" | "line" | "dashed";
    hideLabel?: boolean;
    hideIndicator?: boolean;
    label?: string;
    labelFormatter?: (value: any, payload: any[]) => React.ReactNode;
    labelClassName?: string;
    formatter?: (
      value: any,
      name: string,
      item: any,
      index: number,
      payload: any
    ) => React.ReactNode;
    color?: string;
    nameKey?: string;
    labelKey?: string;
  }>;

  export const ChartLegend: typeof Recharts.Legend;

  export const ChartLegendContent: React.FC<{
    className?: string;
    hideIcon?: boolean;
    payload?: any[];
    verticalAlign?: "top" | "bottom";
    nameKey?: string;
  }>;

  export const ChartStyle: React.FC<{
    id: string;
    config: ChartConfig;
  }>;
}
