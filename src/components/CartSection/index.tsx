import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop";
import { useContext, useEffect, useState } from "react";
import { CartProductsContext } from "../../contexts/selectedProduct";
import { CardCart } from "../CardCart";

const dropIn = {
    hidden: {
        x: "0vh",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        x: "0vh",
        opacity: 0,
    },
};
export const CartSection = ({ handleClose }: any) => {
    const cartProductsContext = useContext(CartProductsContext);
    const cartProducts = cartProductsContext.cartProducts;
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            cartProducts.forEach(product => {
                total += parseInt(String(product.totalPrice));
            });
            return total;
        };
        setTotalPrice(calculateTotalPrice());
    }, [cartProducts]);

    return (
        <Backdrop onClick={handleClose} totalPrice={totalPrice}>
            <motion.div className="cardWrapper"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {cartProducts && cartProducts.map((product) => (
                    <CardCart setTotalPrice={setTotalPrice} key={product.id} product={product}></CardCart>
                ))}
            </motion.div>
        </Backdrop>

    );
};