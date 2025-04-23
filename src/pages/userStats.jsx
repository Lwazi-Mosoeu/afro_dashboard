import React from "react";

import TableSample from "@/components/sample/TableSample";
import PaginationSample from "@/components/sample/PaginationSample";
import { BarChartSample } from "@/components/sample/BarChartSample";

const UserStats = () => {
  return (
    <div className="content-area pb-3 flex flex-col items-center">
      {/* Top block  */}
      <div className="bg-gray-800 rounded-xl w-3/4 p-4 flex flex-col gap-3 h-[1200px]">
        {/* Bar 1 & 2  */}
        <div className="flex-[2] flex flex-col gap-3">
          <div className="bg-gray-600 flex-1 rounded-md"></div>
          <div className="flex flex-1 gap-3">
            {/* Card 1 */}
            <div className="bg-gray-600 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-300 text-sm font-medium mb-2">
                User Sign-in
              </h3>
              <p className="text-white text-4xl font-bold">375</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-600 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-300 text-sm font-medium mb-2">
                Logged Out Automatically
              </h3>
              <p className="text-white text-4xl font-bold">302</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-600 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-300 text-sm font-medium mb-2">
                Failed Attempts
              </h3>
              <p className="text-white text-4xl font-bold">6</p>
            </div>
          </div>
        </div>

        {/* Bar 3 */}
        <div className="bg-gray-600 flex-[3] rounded-md">
          <BarChartSample />
        </div>
      </div>

      {/* Bottom block */}
      <div className="bg-gray-800 rounded-xl w-3/4 h-[1000px] mt-8 p-4">
        <div className="bg-gray-600 h-full w-full rounded-md p-4">
          <TableSample />
          <div className="mt-6">
            <PaginationSample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
