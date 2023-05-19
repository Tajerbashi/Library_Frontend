import React,{Component} from 'react';
import Product from "../Product/Product";
import './ProductList.css'
class ProductList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate : Product List");
    }

    render(){
        console.log("ProductList Log");
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
                            IsAuth = {this.props.IsAuth} 
                    />
                )
            });
    }
                    
}
export default ProductList;