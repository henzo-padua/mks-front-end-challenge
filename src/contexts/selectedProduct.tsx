import React, { useState, createContext } from "react";
import { IProduct } from "../types/IProduct";

interface ICartProductsContext {
  cartProducts: IProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IResponseProduct {
  count: number;
  products: IProduct[];
}

const cartProducts: IProduct[] = [
  {
    id: -1,
    photo: "",
    name: "",
    brand: "",
    createdAt: "",
    description: "",
    updatedAt: "",
    quantity: 0,
    price: 0,
    totalPrice: 0,
  },
];

const initialValue = {
  cartProducts: [],
  setCartProducts: (cartProducts: IProduct[]) => { },
};

const CartProductsContext = createContext<ICartProductsContext>({
  cartProducts,
  setCartProducts: () => { },
});

const CartProductsProvider = ({ children }: any) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(initialValue.cartProducts);

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProductsContext.Provider>




  );
};

export { CartProductsContext, CartProductsProvider };
