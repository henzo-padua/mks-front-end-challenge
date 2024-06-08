import { IProduct, IResponseProduct } from "../../types/IProduct";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { CartSection } from "../../components/CartSection";


export const Home = () => {
    const [productList, setProductList] = useState<IProduct[]>([])
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

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
            <Header modalOpen={modalOpen} setModalOpen={setModalOpen} close={close} open={open} />
            <Container>
                {productList.map((product) => (
                    <ProductCard key={product.id} {...product}></ProductCard>
                ))}

                <AnimatePresence
                    initial={false}
                    onExitComplete={() => null}
                >
                    {modalOpen && <CartSection modalOpen={modalOpen} handleClose={close} />}
                </AnimatePresence>
            </Container>

            <Footer />
        </>
    );
};
