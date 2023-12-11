import axios from 'axios';

interface User {
  name: string;
  email: string;
  picture: string;
}

class UserService {
  private static readonly API_URL = 'https://randomuser.me/api/';

  public static async getUsers(count = 100): Promise<User[]> {
    try {
      const response = await axios.get(`${UserService.API_URL}?results=${count}`);
      const users: User[] = response.data.results.map((result: any) => ({
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        picture: result.picture.medium,
      }));
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}

export default UserService;
