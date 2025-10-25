// modules/user/user.interface.ts

export enum Role {
  ADMIN = 1,
  MODERATOR = 2,
}
export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  role_id: number;
  
}
