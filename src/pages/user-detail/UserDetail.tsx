import React from "react";
import { useParams } from "react-router-dom";
import UserLoginTable from "../user-stats/components/UserLoginTable";

const UserDetail: React.FC = () => {
  const { userId } = useParams(); // Let TypeScript infer string | undefined

  if (!userId) {
    return <div>User ID not found in URL.</div>;
  }

  return (
    <div className="content-area pt-32 p-8">
      <UserLoginTable userId={userId} />
    </div>
  );
};

export default UserDetail;
