export interface IProduct {
  id: number;
  photo: string;
  name: string;
  brand: string;
  createdAt: string;
  description: string;
  updatedAt: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartProduct {
  cartProducts: ICartProduct;
  setCartProducts: (cartProducts: ICartProduct) => void;
}
export interface IResponseProduct {
  count: number;
  products: IProduct[];
}
