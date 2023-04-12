// It's important component because it is the main component of the react project
import {useState} from 'react'

import './App.css'
import ProductList from './../ProductList/ProductList'
import AddProduct from '../AddProduct/AddProduct'

const App = () => {
    const [products,setProducts] = useState([
        {id: 1 , name: 'Kaihan'},
        {id: 2 , name: 'Kamran'},
        {id: 3 , name: 'Mohammad'},
        {id: 4 , name: 'Farhad'},
        {id: 5 , name: 'Karim'},
    ])

    const DeleteProduct = (id) => {
        console.log("DeleteProduct : ",id);
        setProducts(products.filter(item => item.id !== id));
    }
    const UpdateProduct = (id) => {
        console.log("UpdateProduct",id);
    }




    return (
        <div id="app" className="container">
            <AddProduct />
            <ProductList products={products} DeleteProduct={DeleteProduct} UpdateProduct={UpdateProduct}/>
        </div>
    )
}

export default App