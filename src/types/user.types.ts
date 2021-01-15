// User entity types and interfaces

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  rol: UserRol;
}

export enum UserRol {
  ADMIN = "Admin",
  VIEWER = "Viewer"
}
