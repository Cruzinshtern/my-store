import { useRef, useState } from "react";
import styles from "../styles/Product.module.css";

function ProductInCart({ storedProduct }) {

    const EVERY_NTH_KGDISCOUNTED = process.env.REACT_APP_EVERY_NTH_KGDISCOUNTED || 3;
    const DISCOUNT = process.env.REACT_APP_DISCOUNT || 0.5;

    const [price, setPrice] = useState(storedProduct.price);
    const [qt, setQt] = useState(1)
    const qntRef = useRef();

    const calculateSum = () => {
        const quantity = qntRef.current.value;
        setQt(quantity)
        if(storedProduct.isOnDiscount === false) {
            const pr = storedProduct.price * quantity;
            setPrice(pr);
        } else {
            const commonPrice = storedProduct.price;
            const discountedPrice = storedProduct.price - (storedProduct.price * DISCOUNT);
            if(qt < quantity) {
                const isInteger = Number.isInteger(quantity / EVERY_NTH_KGDISCOUNTED);
                switch (isInteger) {
                    case false:
                        setPrice(prevState => prevState + commonPrice);
                        break;
                    case true:
                        setPrice(prevState => prevState + discountedPrice);
                        break;
                    default:
                        break;
                }
            } else {
                const isInteger = Number.isInteger(qt / EVERY_NTH_KGDISCOUNTED);
                switch (isInteger) {
                    case false:
                        setPrice(prevState => prevState - commonPrice);
                        break;
                    case true:
                        setPrice(prevState => prevState - discountedPrice);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    return (
        <div className={ styles.card }>
            { storedProduct.isOnDiscount && <div className={ styles.discount_text }>Discount is {DISCOUNT * 100}% for every {EVERY_NTH_KGDISCOUNTED} item ordered</div> }
            <h3 id='name'>{ storedProduct.name }</h3>
            <p> Price: ${ storedProduct.price }</p>
            <label htmlFor='quantity'>How many do you want?</label>
            <input type='number' id='quantity' name='quantity' min='1' defaultValue='1' onChange={ calculateSum } ref={ qntRef } />
            <p>Total price for { storedProduct.name }s is ${ price }</p>
        </div>
    )
}

export default ProductInCart;
