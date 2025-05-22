// src/types/data.d.ts
declare module "@/data/kpiData" {
  interface KPIData {
    title: string;
    value: string | number;
    delta: string;
    trend: "up" | "down";
  }

  interface KPIDataSet {
    conversion: KPIData;
    revenue: KPIData;
    visitors: KPIData;
  }

  const kpiData: KPIDataSet;
  export default kpiData;
}
