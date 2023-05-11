import React,{Component} from 'react';
import Product from "../Product/Product";
import './ProductList.css'
class ProductList extends Component {
    render(){
        console.log("Product Log");
            return this.props.products.map((item,index) =>{
                return(
                    <Product 
                            Delete = {() => this.props.Delete(index)}
                            title ={item.title} 
                            price ={item.price} 
                            index = {item.index}
                            key={item.id}
                            ChangeTitle = {(e) => this.props.ChangeTitle(e,item.id)} 
                            ChangePrice = {(e) => this.props.ChangePrice(e,item.id)} 
                    />
                )
            });
    }
                    
}
export default ProductList;