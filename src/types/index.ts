export type Role = "user" | "admin" | "super_admin";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  _id: string;
  userId: string;
  products: IProduct[];
  total: number;
  createdAt: string;
  updatedAt: string;
}
