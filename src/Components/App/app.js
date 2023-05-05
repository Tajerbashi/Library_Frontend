import {React, useState} from "react"
import './app.css'

import MainHeader from "../header/header";
import MainNav from "../nav/nav";
import Product from "../Product/Product";
const App = () => {
    console.log("Starting");
    let counter = -1;
    const [productsState,setProductsState] = useState({
        products:[
            {
                title: "شما نسخه برتر هستید !",
                price: "2,500,000",
                index: 0
            },
            {
                title: "جادوی فکر بزرگ",
                price: "1,500,000",
                index: 1
            },
            {
                title: "چهار اثر فلورانس",
                price: "1,200,000",
                index: 2
            },
            {
                title: "اثر مرکب",
                price: "980,000",
                index: 3
            },
            {
                title: "قدرت نامحدود",
                price: "1,100,000",
                index: 4
            },
            {
                title: "365 گام موفقیت",
                price: "1,750,000",
                index: 5
            },
        ],
        ShowProducts : true
    });
    const ChangeTitle = (word,index) => {
        let data = productsState.products;
        data[index].title = word;
        setProductsState({products: data,ShowProducts : true});
        // setProductsState(data);
    };
    const ChangePrice = (word,index) => {
        let data = productsState.products;
        data[index].price = word;
        setProductsState({products: data,ShowProducts : true});
    };
    const ShowHandler = () => {
        let flag = productsState.ShowProducts ? false : true;
        setProductsState({products: productsState.products,ShowProducts : flag});

    };
    const DeleteProduct = (index) =>{
        const data = [...productsState.products]
        // let data = productsState.products;
        // data = data.filter(item => {
        //     return item.index !== index ? item : null;
        // });
        data.splice(index,1);
        setProductsState({products: data,ShowProducts :true});
    }
    let productsDiv = null;
    if (productsState.ShowProducts){
        productsDiv = (
            <div className="app-product-list-div">
                {
                    productsState.products.map((item,index) =>{
                        counter ++;
                        return <Product title ={item.title} 
                                        price ={item.price} 
                                        index = {item.index}
                                        Delete = {() => DeleteProduct(index)}
                                        ChangeTitle = {(e) => ChangeTitle(e.target.value,index)} 
                                        ChangePrice = {(e) => ChangePrice(e.target.value,index)} />
                    })
                }
            </div> 
        );
    }
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
                productsDiv
            }
        </div>
    );
}

export default App;