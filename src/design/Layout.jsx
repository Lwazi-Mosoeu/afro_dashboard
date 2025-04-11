import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex justify-center bg-gray-500 pt-24">
        <div className="w-4/6 bg-gray-400 h-full flex flex-col items-center gap-4 py-4 px-4">
          <div className="flex w-full h-160 gap-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-5 flex-1">
              <div className="bg-white w-full h-full rounded-xl">1</div>
              <div className="bg-white w-full h-full rounded-xl">2</div>
              <div className="bg-white w-full h-full rounded-xl">3</div>
              <div className="bg-white w-full h-full rounded-xl">4</div>
            </div>

            <div className="bg-white flex-1 h-full rounded-xl">5</div>
          </div>

          <div className="w-full h-160 bg-white rounded-xl">1</div>

          <div className="flex w-full h-140 gap-4">
            <div className="bg-white flex-1 rounded-xl">1</div>
            <div className="bg-white flex-1 rounded-xl">2</div>
          </div>

          <div className="flex w-full h-140 gap-4">
            <div className="bg-white flex-1 rounded-xl">1</div>
            <div className="bg-white flex-1 rounded-xl">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
