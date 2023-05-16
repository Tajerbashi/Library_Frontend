import React from 'react';
import Product from "../Product/Product";
import './ProductList.css'
const ProductList = (props) => {
    console.log("ProductList : ",props);
            return props.products.map((item,index) =>{
                return(
                    <Product 
                            Delete = {() => props.Delete(index)}
                            title ={item.title} 
                            price ={item.price} 
                            index = {item.index}
                            key={item.id}
                            ChangeTitle = {(e) => props.ChangeTitle(e,item.id)} 
                            ChangePrice = {(e) => props.ChangePrice(e,item.id)} 
                            IsAuth = {props.IsAuth}
                    />
                )
            });
                    
}
export default ProductList;