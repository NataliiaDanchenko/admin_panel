export interface IUser {
  id: string;
  role: string,
  status: string;
  name: string,
  phone: string,
  email: string,
  country: string,
  city: string,
  avatar: string,
}

export interface UserStateSchema {
  users: IUser[]
}

