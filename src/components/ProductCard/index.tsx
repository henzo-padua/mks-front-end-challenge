import { IProduct } from "../../types/IProduct";
import { Button, Container, ContainerWrapper, Description, Image, InfoWrapper } from "./styles";

export const ProductCard = (product: IProduct) => {


    return (
        <Container>
            <Image src={product.photo} />
            <ContainerWrapper>
                <InfoWrapper>
                    <h2>{product.name}</h2>
                    <span>{product.price}</span>
                    <Description>
                        <p>{product.description}</p>
                    </Description>
                </InfoWrapper>
                <Button>
                    <Image />
                    <p>COMPRAR</p>
                </Button>
            </ContainerWrapper>
        </Container>
    )
}