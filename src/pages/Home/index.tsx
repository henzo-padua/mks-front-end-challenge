import { IProduct, IResponseProduct } from "../../types/IProduct";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";
import { Container } from "./styles";

import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [productList, setProductList] = useState<IProduct[]>([])
    const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC"

    useEffect(() => {
        axios.get<IResponseProduct>(url).then((response) => {
            setProductList(response.data.products)
        }).catch((err) => {
            console.log('Error: ' + err)
        })
    }, [])
    return (
        <>
            <Header />
            <Container>
                {productList.map((product) => (
                    <ProductCard key={product.id} {...product}></ProductCard>
                ))}
            </Container>
            <Footer />
        </>
    );
};
