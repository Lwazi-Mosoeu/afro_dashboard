import LoginTable from "@/pages/user-stats/components/LoginTable";
import { ActivityChart } from "@/pages/user-stats/charts/BarChart";

const UserStats = () => {
  return (
    <div className="content-area pb-3 flex flex-col items-center">
      <div className="bg-gray-80 rounded-xl w-3/4 p-4 flex flex-col gap-3 h-[715px]">
        <div className="flex-[1] flex flex-col gap-3">
          <div className="bg-gray-50 h-24 rounded-md px-6 flex items-center justify-between">
            <h2 className="text-gray-700 text-lg font-semibold">
              Security Summary
            </h2>
            <h2 className="text-blue-500 text-lg font-semibold">Activities</h2>
          </div>
          <div className="flex gap-3 h-32">
            <div className="bg-gray-60 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-blue-300 text-sm font-medium mb-2">
                User Sign-in
              </h3>
              <p className="bg-gray-70 text-4xl font-bold">375</p>
            </div>
            <div className="bg-gray-60 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-blue-400 text-sm font-medium mb-2">
                Logged Out Automatically
              </h3>
              <p className="text-gray-900 text-4xl font-bold">302</p>
            </div>
            <div className="bg-gray-60 flex-1 rounded-md p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-red-500 text-sm font-medium mb-2">
                Failed Attempts
              </h3>
              <p className="text-gray-900 text-4xl font-bold">6</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-60 flex-[3] rounded-md">
          <ActivityChart />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl w-3/4 h-[800px] mt-8 p-4">
        <div className="bg-gray-50 h-full w-full rounded-md p-4 flex flex-col">
          <div className="flex-grow overflow-hidden">
            <LoginTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
