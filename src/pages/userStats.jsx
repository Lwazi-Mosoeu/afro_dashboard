import React from "react";

const UserStats = () => {
  return (
    <div className="content-area pb-3">
      <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 items-center">
        {/* Top block*/}
        <div className="flex-1 bg-gray-800 rounded-xl w-2/4"></div>

        {/* Bottom block*/}
        <div className="flex-1 bg-gray-800 rounded-xl w-2/4"></div>
      </div>
    </div>
  );
};

export default UserStats;
