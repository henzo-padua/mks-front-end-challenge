import { useContext } from "react";
import { CartProductsContext } from "../../contexts/selectedProduct";
import { Container, MotionButton } from "./styles";

export const Header = ({ modalOpen, setModalOpen, close, open }: any) => {

    const cartProducts = useContext(CartProductsContext)

    return (
        <Container>
            <h1>MKS <span>Sistemas</span></h1>
            <MotionButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => (modalOpen ? close() : open())}
            >
                <img src="/assets/Vector.svg" alt="cart" />{cartProducts.cartProducts.length}
            </MotionButton>
        </Container>
    )
}