export interface Credential {
  email: string;
  password: string;
}

export interface UserProps {
  id: string;
  email: string;
  token: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  fullName: string;
}

type UserRole = "user" | "admin" | "moderator";

export interface RegisterResponse {
  email: string;
  fullName: string;
  id: string;
  isActive: boolean;
  roles: UserRole[];
  token: string;
}