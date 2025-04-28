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
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchLoginHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/login-history");
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

  // Filter data based on search input
  const filteredData = loginHistory.filter((log) =>
    log.agent?.toLowerCase().includes(filter.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
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
        <div className="flex items-center justify-between mb-4">
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
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-2 py-1 rounded bg-white text-gray-800 border border-gray-300 text-sm"
              placeholder="Search names..."
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <Table className="w-full">
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
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  {filter
                    ? "No matching results found"
                    : "No login history available"}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((log) => (
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

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing {paginatedData.length} of {filteredData.length} entries
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded border border-gray-300 ${
                  currentPage === pageNum ? "bg-gray-200" : ""
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginTable;
