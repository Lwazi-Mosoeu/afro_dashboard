import { AreaLegend } from "@/pages/afa-analytics/charts/Area";
import { BarCharts } from "@/pages/afa-analytics/charts/BarChart";
import { HoriBar } from "@/pages/afa-analytics/charts/HoriBar";
import { MultiBar } from "@/pages/afa-analytics/charts/MultiBar";
import { MultiLine } from "@/pages/afa-analytics/charts/MultiLine";
import { StackBar } from "@/pages/afa-analytics/charts/StackBar";
import { KPICard } from "@/pages/afa-analytics/charts/kpi-card";
import { kpiData } from "@/data/kpiData";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Main content area under the topbar */}
      <div className="flex-1 flex justify-center bg-white">
        {/* Vertical bar */}
        <div className="w-4/6 bg-gray-50 h-full flex flex-col items-center gap-4 py-4 px-4 rounded-xl">
          {/* Row 1 - 2x2 grid of small squares on the left, big square on the right */}
          <div className="flex w-full h-160 gap-4">
            {/* Left side - 2x2 grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-5 flex-1">
              <div>
                <KPICard data={kpiData.conversion} />
              </div>
              <div className="bg-white w-full h-full rounded-xl">
                <KPICard data={kpiData.revenue} />
              </div>
              <div className="bg-white w-full h-full rounded-xl">
                <KPICard data={kpiData.visitors} />
              </div>
              <div className="bg-white w-full h-full rounded-xl"></div>
            </div>
            {/* Right side - large square */}
            <div className="w-1/2 h-full">
              <MultiBar />
            </div>
          </div>

          {/* Row 2 - full-width rectangle */}
          <div className="w-full">
            <MultiLine />
          </div>

          {/* Row 3 - two large squares side by side */}
          <div className="flex w-full h-140 gap-4">
            <div className="bg-white flex-1 h-full rounded-xl">
              <StackBar />
            </div>
            <div className="bg-white flex-1 h-full rounded-xl">
              <HoriBar />
            </div>
          </div>

          {/* Row 4 - same as Row 3 */}
          <div className="flex w-full h-140 gap-4">
            <div className="bg-white flex-1 h-full rounded-xl">
              <AreaLegend />
            </div>
            <div className="bg-white flex-1 h-full rounded-xl">
              <BarCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
