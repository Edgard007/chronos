export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  name?: string;
}

export interface Session {
  isLogeedIn: boolean;
  token: string;
  signInTime: string;
  logoutTime: string;
}

export interface ISessionReducer {
  user: User;
  session: Session;
}
