export interface Credential {
  email: string;
  password: string;
}

// Tipos para el usuario y credenciales
export interface UserProps {
  id: string;
  email: string;
  token: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}

// Tipos para los datos de registro (puedes extender según lo que requiera tu API)
export interface RegisterProps {
  email: string;
  password: string;
  name?: string; // Si tu API espera un nombre u otros campos opcionales
}

// Tipos para la respuesta del registro
export interface RegisterResponse {
  id: string;
  email: string;
  token: string;
}