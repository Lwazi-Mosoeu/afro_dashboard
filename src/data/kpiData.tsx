// src/data/kpiData.ts
interface KPIData {
  title: string;
  value: string; // Changed from string|number since all values are strings
  trend: "up" | "down";
  delta: string;
}

export const kpiData: Record<string, KPIData> = {
  revenue: {
    title: "Total Revenue",
    value: "$45,231.89",
    trend: "up",
    delta: "20.1%",
  },
  visitors: {
    title: "Website Visitors",
    value: "12,456",
    trend: "up",
    delta: "5.2%",
  },
  conversion: {
    title: "Conversion Rate",
    value: "3.2%",
    trend: "down",
    delta: "1.1%",
  },
};
