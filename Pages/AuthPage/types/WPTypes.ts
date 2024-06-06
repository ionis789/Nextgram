export interface FormValues {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
export type authModeTypes = 'login' | 'register' | 'logout' | null;
