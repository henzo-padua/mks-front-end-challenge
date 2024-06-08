import { MouseEventHandler, ReactNode, useContext, useEffect, useState } from "react";
import { Aside, ButtonCart } from "./styles";
import { CartProductsContext } from "../../contexts/selectedProduct";

type BackdropProps = {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
    totalPrice: number
};

export const Backdrop: React.FC<BackdropProps> = ({ children, totalPrice, onClick }) => {

    return (
        <Aside
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <div>
                    <h2 className="title">Carrinho de compras</h2>
                    <button id="closebutton">X</button>
                </div>
                {children}
            </div>

            <div>
                <h3>Total</h3>
                <p id="price-aside">R${totalPrice}</p>
                <ButtonCart>Finalizar Compra</ButtonCart>
            </div>
        </Aside>
    );
};