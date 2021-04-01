import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import ProductInCart from "./ProductInCart";
import styles from "./styles/Store.module.css";

function Cart() {

    const { storedProducts } = useContext(Context);
    const [ isEmpty, setIsEmpty ] = useState(true);

    useEffect(() => {
        if(storedProducts.length) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }, [storedProducts.length])

    return (
        <div className={ styles.products }>
            {
                isEmpty ? <h2>Add something here from the Store</h2> :
                storedProducts.map(storedProduct =>
                    <ProductInCart key={ storedProduct.id } storedProduct={ storedProduct }/>)
            }
        </div>
    )
}

export default Cart;
