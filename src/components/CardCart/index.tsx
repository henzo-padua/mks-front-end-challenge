import { useContext } from "react";
import { IProduct } from "../../types/IProduct";
import { Container, ContainerWrapper, Image, InfoWrapper, Quantity } from "./styles";
import { CartProductsContext } from "../../contexts/selectedProduct";

type CardCartProps = {
    product: IProduct
    setTotalPrice: (number: number) => void
};

export const CardCart: React.FC<CardCartProps> = ({ product, setTotalPrice }) => {
    const { cartProducts, setCartProducts } = useContext(CartProductsContext);

    const cartQuantity = (value: string, id: number) => {
        const index = cartProducts.findIndex(obj => obj.id === id);

        const updatedProduct = { ...cartProducts[index] };

        if (value === "sum") {
            updatedProduct.quantity += 1;
        } else if (value === "sub" && updatedProduct.quantity > 0) {
            updatedProduct.quantity -= 1;
        }
        updatedProduct.totalPrice = updatedProduct.price * updatedProduct.quantity

        const newCartProducts = [
            ...cartProducts.slice(0, index),
            updatedProduct,
            ...cartProducts.slice(index + 1),
        ];

        setCartProducts(newCartProducts);
        let totalPrice = 0;
        newCartProducts.forEach(product => {
            totalPrice += parseInt(String(product.totalPrice));
        });
        setTotalPrice(totalPrice);
    };

    const handleRemoveProduct = (id: number) => {
        const newCartList = cartProducts.filter((obj) => (obj.id != id))
        setCartProducts(newCartList)

    }

    return (
        <Container>
            <Image src={product.photo} />
            <ContainerWrapper>
                <div id="cartname">
                    <h2>{product.name}</h2>
                </div>
                <InfoWrapper>
                    <Quantity>
                        <button className="sub" onClick={() => cartQuantity("sub", product.id)}>-</button>
                        <hr />
                        <p id="quantity">{product.quantity}</p>
                        <hr />
                        <button className="sum" onClick={() => cartQuantity("sum", product.id)}>+</button>
                    </Quantity>
                    <div id="price">
                        <span>R${product.totalPrice}</span>
                    </div>
                </InfoWrapper>
                <button id="remove" onClick={() => handleRemoveProduct(product.id)}>X</button>
            </ContainerWrapper>
        </Container>
    )
}