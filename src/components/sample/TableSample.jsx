import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const TableSample = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4">
      {/* Top section */}
      <div>
        {/* Section Titles */}
        <div className="mb-2">
          <h2 className="text-gray-800 text-lg font-semibold">
            Login Sessions
          </h2>
          <h3 className="text-gray-600 text-sm">Logs Analysis</h3>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between">
          {/* Left - Export Buttons */}
          <div className="bg-gray-200 rounded-md p-2 flex gap-2 text-sm text-gray-800">
            <button className="hover:bg-gray-300 px-3 py-1 rounded">
              Print
            </button>
            <button className="hover:bg-gray-300 px-3 py-1 rounded">
              Copy
            </button>
            <button className="hover:bg-gray-300 px-3 py-1 rounded">
              Excel
            </button>
            <button className="hover:bg-gray-300 px-3 py-1 rounded">CSV</button>
            <button className="hover:bg-gray-300 px-3 py-1 rounded">PDF</button>
          </div>

          {/* Right - Search */}
          <div className="flex items-center gap-2 text-gray-800">
            <span className="text-sm">Search:</span>
            <input
              type="text"
              className="px-2 py-1 rounded bg-gray-60 text-gray-800 border border-gray-60 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table className="h-full">
        <TableHeader className="sticky top-0 bg-gray-50 z-10">
          <TableRow className="h-16">
            <TableHead className="py-4 px-6 text-lg">Name</TableHead>
            <TableHead className="py-4 px-6 text-lg">Email</TableHead>
            <TableHead className="py-4 px-6 text-lg">Status</TableHead>
            <TableHead className="py-4 px-6 text-lg">Device</TableHead>
            <TableHead className="py-4 px-6 text-lg">Time</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Sample rows */}
          {Array.from({ length: 10 }).map((_, idx) => (
            <TableRow key={idx}>
              <TableCell className="py-3 px-6">John Doe</TableCell>
              <TableCell className="py-3 px-6">john@example.com</TableCell>
              <TableCell className="py-3 px-6">OK</TableCell>
              <TableCell className="py-3 px-6">desktop</TableCell>
              <TableCell className="py-3 px-6">Date</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSample;
