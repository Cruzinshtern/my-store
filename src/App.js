import { useEffect, useState } from "react";
import './App.css';
import Context from "./Context";
import { data } from "./service/mockServiceData";
import Navbar from "./components/shared/Navbar";
import Store from "./components/store/Store";
import 'materialize-css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";


function App() {

    const [products, setProducts] = useState([]);
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        setProducts(data)
    }, [])

    useEffect(() => {
        const storedProds = JSON.parse(localStorage.getItem('cart'))
        if (storedProds) setStoredProducts(storedProducts)
    }, [storedProducts])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(storedProducts))
    }, [storedProducts])


  return (
    <div className="App">
        <Router>
            <Context.Provider value={{ products, setStoredProducts, storedProducts }}>
                <Navbar />
                <Switch>
                    <Route exact={true} path='/'>
                        <Store />
                    </Route>
                    <Route path='/cart'>
                        <Cart/>
                    </Route>
                </Switch>
            </Context.Provider>
        </Router>
    </div>
  );
}

export default App;
