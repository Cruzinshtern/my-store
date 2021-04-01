import styles from '../components/styles/Product.module.css'
import { useContext } from "react";
import Context from "../Context";


function RemoveFromCartButton({ product, setIsAdded }) {

    const { storedProducts, setStoredProducts } = useContext(Context);

    const handleRemoval = (product) => {
        const newState = storedProducts.filter(i => i.id !== product.id);
        setStoredProducts(newState);
        setIsAdded(false)
    }

    return (
        <button className={ styles.button } onClick={ () => handleRemoval(product) }>Remove from cart</button>
    )
}

export default RemoveFromCartButton;
