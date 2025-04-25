import React from "react";
import { HealthStatus } from "./charts/HealthStatus";
import { AntiretroviralTreatment } from "./charts/AntiretroviralTreatment";
import { ProgrameEnrolment } from "./charts/ProgrameEnrolment";

const ServiceIntervention = () => {
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
              <div className="bg-white w-full h-full rounded-xl"></div>
              <div className="bg-white w-full h-full rounded-xl"></div>
              <div className="bg-white w-full h-full rounded-xl"></div>
              <div className="bg-white w-full h-full rounded-xl"></div>
            </div>
            {/* Right side*/}
            <div className="w-1/2 h-full bg-white rounded-xl"></div>
          </div>

          {/* Row 2*/}
          <div className="w-full h-80 bg-white rounded-xl">
            Risk And Follow-Up Contact
          </div>

          {/* Row 3*/}
          <div className="w-full h-80 bg-white rounded-xl">File Updates</div>

          {/* Row 4*/}
          <div className="w-full h-80 bg-white rounded-xl">
            <ProgrameEnrolment />
          </div>

          {/* Row 5*/}
          <div className="w-full h-80 bg-white rounded-xl">
            {/* <Antiretroviral Treatment/> */}
          </div>

          {/* Row 6*/}
          <div className="w-full h-80 bg-white rounded-xl">
            {/* <HealthStatus /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntervention;
