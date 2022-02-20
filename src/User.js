import React, { useEffect } from "react";
import { useUsers } from "./hooks/useUsers";

const User = () => {
  const { users, fetchUsersData } = useUsers();

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {!users.length
        ? null
        : users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
    </div>
  );
};

export default User;
