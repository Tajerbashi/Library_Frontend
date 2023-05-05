import {React, useState} from "react"
import './app.css'

import MainHeader from "../header/header";
import MainNav from "../nav/nav";
import Product from "../Product/Product";
import { render } from "@testing-library/react";
const App = () => {
    console.log("Starting");
    const [productsState,setProductsState] = useState({
        products:[
            {
                title: "شما نسخه برتر هستید !",
                price: "2,500,000"
            },
            {
                title: "جادوی فکر بزرگ",
                price: "1,500,000"
            },
            {
                title: "چهار اثر فلورانس",
                price: "1,200,000"
            },
            {
                title: "اثر مرکب",
                price: "980,000"
            },
            {
                title: "قدرت نامحدود",
                price: "1,100,000"
            },
            {
                title: "365 گام موفقیت",
                price: "1,750,000"
            },
        ],
        ShowProducts : true
    });
    const ChangeTitle = (event,index) => {
        console.log('====================================');
        console.log(event.target.value);
        console.log('====================================');
    };
    const ChangePrice = (event,index) => {
        console.log('====================================');
        console.log(event.target.value);
        console.log('====================================');
    };
    const ShowHandler = () => {
        productsState.ShowProducts = productsState.ShowProducts ? false : true;
        setProductsState.ShowProducts = setProductsState.ShowProducts ? false : true;
        console.log('====================================');
        console.log("SetState : ",setProductsState.ShowProducts);
        console.log("State : ",productsState.ShowProducts);
        console.log('====================================');
    };
    let btn = {
        padding: '1rem',  
        margin: '0.2rem auto',
        borderRadius: '5rem',
        border: 'none',
        textAlign: 'center',
        alignItems: 'center',
        background: '#000',
        color: 'wheat',
        boxShadow : '0 0 10px 5px #0005',
    };
    return (
        <div>
            <MainHeader />
            <MainNav />
            <button style={btn} onClick={ShowHandler}>Hide/Show Products</button>
            {
                productsState.ShowProducts ? (
                    <div className="app-product-list-div">
                        <Product
                                title={productsState.products[0].title}
                                price={productsState.products[0].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                        <Product
                                title={productsState.products[1].title}
                                price={productsState.products[1].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                        <Product
                                title={productsState.products[2].title}
                                price={productsState.products[2].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                        <Product
                                title={productsState.products[3].title}
                                price={productsState.products[3].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                        <Product
                                title={productsState.products[4].title}
                                price={productsState.products[4].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                        <Product
                                title={productsState.products[5].title}
                                price={productsState.products[5].price}

                                ChangeTitle={ChangeTitle}
                                ChangePrice={ChangePrice}
                                 />
                    </div> ) : null
            }
        </div>
    );
}

export default App;