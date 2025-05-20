// src/pages/user-detail/UserDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import UserLoginTable from "../user-stats/components/UserLoginTable";

const UserDetail = () => {
  const { userId } = useParams(); // This extracts the userId from the URL

  return (
    <div className="content-area pt-32 p-8">
      <UserLoginTable userId={userId} /> {/* Pass the userId to the table */}
    </div>
  );
};

export default UserDetail;
