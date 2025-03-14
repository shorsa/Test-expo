export interface UserState {
  user?: { userExists: boolean };
  activeRequests: number;
  isLoading: boolean;
}
