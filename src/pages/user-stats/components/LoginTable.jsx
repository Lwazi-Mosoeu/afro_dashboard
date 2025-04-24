import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const LoginTable = () => {
  const [loginHistory, setLoginHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginHistory = async () => {
      try {
        const response = await fetch("/api/login-history");
        console.log(response);
        const data = await response.json();
        setLoginHistory(data);
      } catch (error) {
        console.error("Failed to fetch login history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoginHistory();
  }, []);

  const getStatusColor = (action) => {
    return action === "login" ? "text-green-600" : "text-red-600";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

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
            <TableHead className="py-4 px-6 text-lg">Action</TableHead>
            <TableHead className="py-4 px-6 text-lg">Status</TableHead>
            <TableHead className="py-4 px-6 text-lg">Device</TableHead>
            <TableHead className="py-4 px-6 text-lg">Time</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                Loading...
              </TableCell>
            </TableRow>
          ) : loginHistory.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                {/* No login history found */}
              </TableCell>
            </TableRow>
          ) : (
            loginHistory.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="py-3 px-6">{log.agent}</TableCell>
                <TableCell className="py-3 px-6 capitalize">
                  {log.action}
                </TableCell>
                <TableCell
                  className={`py-3 px-6 ${getStatusColor(log.action)}`}
                >
                  {log.status}
                </TableCell>
                <TableCell className="py-3 px-6 capitalize">
                  {log.device}
                </TableCell>
                <TableCell className="py-3 px-6">
                  {formatDate(log.created_at)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default LoginTable;
