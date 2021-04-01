import { useContext } from "react";
import Product from "./Product";
import styles from './styles/Store.module.css'
import Context from "../Context";

function Store() {

    const { products } = useContext(Context);

    return (
        <div className={ styles.page }>
            <h2>Welcome to MyShop store</h2>
            <div className={ styles.products }>
                {products.map(product => <Product key={ product.id } product={ product }/>)}
            </div>
        </div>

    )
}

export default Store;
