import { useContext, useEffect, useState } from "react";
import styles from '../styles/Product.module.css'
import Context from "../../Context";
import RemoveFromCartButton from "../helpers/RemoveFromCartButton";
import banana from '../../assets/banana.jpg'
import apple from '../../assets/apple.png'
import papaya from '../../assets/papaya.jpeg'


function Product({ product }) {

    const { setStoredProducts, storedProducts } = useContext(Context);
    const [ isAdded, setIsAdded ] = useState(false);

    const existingProds = storedProducts.map(i => i.id);

    useEffect(() => {
        if(existingProds.includes(product.id)) {
            setIsAdded(true)
        }
    }, [existingProds, product.id]);

    const addToCart = (product) => {
        setIsAdded(true);
        const addedProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            isOnDiscount: product.isOnDiscount
        };
        setStoredProducts(prevState => {
            return [...prevState, addedProduct]
        });
    }

    return (
        <div className={ styles.card }>
            {product.name === 'Banana' && <img src={banana} alt=''/> }
            {product.name === 'Apple' && <img src={apple} alt=''/> }
            {product.name === 'Papaya' && <img src={papaya} alt=''/> }
            <h3 id='name'>{ product.name }</h3>
            <p> Price: ${ product.price }</p>
            <>{ isAdded ? <RemoveFromCartButton product={product} setIsAdded={ setIsAdded }/> : <button className={ styles.button } onClick={ () => addToCart(product) }>Add to cart</button> }</>
        </div>
    )
}

export default Product;
