import React from "react";
import { useParams } from "react-router-dom";
import UserLoginTable from "../user-stats/components/UserLoginTable";

const UserDetail = () => {
  const { userId } = useParams();

  return (
    <div className="content-area pt-32 p-8">
      <UserLoginTable userId={userId} />
    </div>
  );
};

export default UserDetail;
