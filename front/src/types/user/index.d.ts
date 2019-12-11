declare type User = {
  id: string | number;
  login: string;
  firstname: string;
  lastname: string;
  token: string;
  isAuthenticated?: boolean;
};
