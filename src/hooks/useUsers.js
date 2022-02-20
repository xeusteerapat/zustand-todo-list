import { useCallback } from "react";
import { useStore } from "../store";

export const useUsers = () => {
  const { users, fetchUsers } = useStore((state) => state);

  const fetchUsersData = useCallback(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, fetchUsersData };
};
