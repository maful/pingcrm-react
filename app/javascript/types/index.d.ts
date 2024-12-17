export interface User {
  id: number;
  first_name: string;
  last_name: string;
  account: Account;
}

export interface Account {
  id: number;
  name: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
  flash: {
    success: string | null;
    error: string | null;
  };
  errors: Record<string, unknown>;  // Add this line
};
