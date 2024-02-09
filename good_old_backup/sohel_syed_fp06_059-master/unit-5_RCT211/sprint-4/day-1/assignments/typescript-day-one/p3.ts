interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }
  
  type UserOrAdmin = User | Admin;
  
  function getUserType(user: UserOrAdmin): string {
    if (user.type === 'user') {
      return 'User';
    } else if (user.type === 'admin') {
      return 'Admin';
    } else {
      return 'Unknown';
    }
  }
  