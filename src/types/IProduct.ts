export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface ISelectedProduct {
  id: number;
  name: string;
  photo: string;
  quantity: number;
  price: number;
}

export interface IResponseProduct {
  count: number;
  products: IProduct[];
}
