import { useContext } from "react";
import { IProduct } from "../../types/IProduct";
import { Button, Container, ContainerWrapper, Description, Image, InfoWrapper } from "./styles";
import { CartProductsContext } from "../../contexts/selectedProduct";


export const ProductCard = (product: IProduct) => {

    const { cartProducts, setCartProducts } = useContext(CartProductsContext)

    const handleProductCart = () => {
        const foundObject = cartProducts.find(obj => obj.id === product.id);

        if (foundObject) {
            alert("Produto já adicionado no carrinho!");
        } else {
            const newProduct = { ...product };

            if (isNaN(newProduct.quantity)) {
                newProduct.quantity = 1;
            } if (isNaN(newProduct.totalPrice)) {
                newProduct.totalPrice = newProduct.price * newProduct.quantity
            }
            setCartProducts([...cartProducts, newProduct]);
        }
    }

    return (
        <Container>
            <Image src={product.photo} />
            <InfoWrapper>
                <ContainerWrapper>
                    <h2>{product.name}</h2>
                    <span>R${product.price}</span>
                </ContainerWrapper>
                <Description>
                    <p>{product.description}</p>
                </Description>
            </InfoWrapper>
            <Button onClick={handleProductCart}>
                <img src="/assets/shopping-bag.svg" alt="bag" />
                <p>COMPRAR</p>
            </Button>
        </Container>
    )
}