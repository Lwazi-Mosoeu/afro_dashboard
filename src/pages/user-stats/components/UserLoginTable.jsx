// src/pages/user-stats/components/UserLoginTable.jsx
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const UserLoginTable = ({ userId }) => {
  console.log("Received userId:", userId); // Debug log

  const [loginHistory, setLoginHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (!userId) return; // Guard clause if userId is missing

    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch user details
        const userRes = await fetch(
          `http://localhost:5000/api/users/${userId}`
        );
        if (!userRes.ok) throw new Error("User fetch failed");
        const userData = await userRes.json();
        setUserDetails(userData);

        // Fetch login history
        const historyRes = await fetch(
          `http://localhost:5000/api/login-history?user_id=${userId}`
        );
        if (!historyRes.ok) throw new Error("History fetch failed");
        const historyData = await historyRes.json();
        setLoginHistory(historyData);
      } catch (error) {
        console.error("Fetch error:", error);
        setUserDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const getStatusColor = (action) => {
    return action === "login" ? "text-green-600" : "text-red-600";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return <div className="text-center py-8">Loading user data...</div>;
  }

  if (!userDetails) {
    return <div className="text-center py-8">User not found</div>;
  }

  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
      {/* User Header */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">{userDetails.username}</h1>
        <p className="text-gray-600">
          Member since: {new Date(userDetails.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Login History Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">User Activity</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loginHistory.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No activity found
                </TableCell>
              </TableRow>
            ) : (
              loginHistory.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="capitalize">{log.action}</TableCell>
                  <TableCell className={getStatusColor(log.action)}>
                    {log.status}
                  </TableCell>
                  <TableCell className="capitalize">{log.device}</TableCell>
                  <TableCell>{formatDate(log.created_at)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserLoginTable;
