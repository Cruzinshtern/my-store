import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

function Navbar() {

    const { storedProducts } = useContext(Context);

    return (
        <nav>
            <div className="nav-wrapper blue lighten-2">
                <li className="left brand-logo">MyShop</li>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Store</Link></li>
                    <li><Link to="/cart">Cart { storedProducts.length }</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
