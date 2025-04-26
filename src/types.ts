export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

export type User = {
  email: string;
  password: string;
  name?: string; // Optional field, bisa ditambahkan atau dihapus sesuai kebutuhan
  id?: string; //
};
