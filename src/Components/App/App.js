// It's important component because it is the main component of the react project
import {useState} from 'react'

import './App.css'
import ProductList from './../ProductList/ProductList'
import AddProduct from '../AddProduct/AddProduct'

const App = () => {
    const [products,setProducts] = useState([
        {id: 1 , title: 'Kaihan'},
        {id: 2 , title: 'Kamran'},
        {id: 3 , title: 'Mohammad'},
        {id: 4 , title: 'Farhad'},
        {id: 5 , title: 'Karim'},
    ])

    const DeleteProduct = (id) => {
        console.log("DeleteProduct : ",id);
        setProducts(products.filter(item => item.id !== id));
    }
    const UpdateProduct = (id) => {
        console.log("UpdateProduct",id);
    }
    const AddToProducts = (title) => {
        console.log("AddProduct :",title);
        const id = Math.floor(Math.random()*10000);
        const newProduct = {id , ...title};

        setProducts([...products,newProduct])

    }



    return (
        <div id="app" className="container">
            <AddProduct onAdd={AddToProducts}/>
            <ProductList products={products} DeleteProduct={DeleteProduct} UpdateProduct={UpdateProduct}/>
        </div>
    )
}

export default App