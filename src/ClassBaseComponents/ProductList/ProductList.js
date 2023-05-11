import React,{Component} from 'react';
import Product from "../Product/Product";
import './ProductList.css'
class ProductList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate : Product List");
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate : Product List");
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate : Product List");
    }

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