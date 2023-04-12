// It's important component because it is the main component of the react project
import {useState, useEffect} from 'react'

import './App.css'
import ProductList from './../ProductList/ProductList'
import AddProduct from '../AddProduct/AddProduct'

const App = () => {
    const [products,setProducts] = useState([])

    useEffect(() =>{
        const sendRequest = async () => {
            const response = await fetch("http://localhost:8877/Products");
            const data = await response.json();
            setProducts(data);
        }

        sendRequest();
    },[])

    const DeleteProduct = async (id) => {
        console.log("DeleteProduct : ",id);
        await fetch(`http://localhost:8877/Products/${id}`,{method: 'DELETE' });
        setProducts(products.filter(item => item.id !== id));
    }

    const UpdateProduct = (id) => {
        console.log("UpdateProduct",id);
    }

    const AddToProducts = async (title) => {
        console.log("AddProduct :",title);

        const response = await fetch("http://localhost:8877/Products",
        {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(title)
        });
        const data = await response.json();
        setProducts([...products,data])

    }



    return (
        <div id="app" className="container">
            <AddProduct onAdd={AddToProducts}/>
            <ProductList products={products} DeleteProduct={DeleteProduct} UpdateProduct={UpdateProduct}/>
        </div>
    )
}

export default App