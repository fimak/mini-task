import { useEffect, useState } from 'react';
import UserService from '../services/userService';

interface User {
  name: string;
  email: string;
  picture: string;
}

const useUsers = (count = 100): { users: User[] | null; loading: boolean; error: Error | null } => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await UserService.getUsers(count);
        setUsers(fetchedUsers);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [count]);

  return { users, loading, error };
};

export default useUsers;
