export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  isActive: boolean;
  lastLogin?: Date;
}
