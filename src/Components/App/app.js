import {React} from "react"
import './app.css'

import MainHeader from "../header/header";
import MainNav from "../nav/nav";
import Product from "../Product/Product";

const App = () => {
    return (
        <div>
            <MainHeader />
            <MainNav />
            <div className="app-product-list-div">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default App;