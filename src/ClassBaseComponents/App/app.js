import React from "react"
import './app.css'

import ProductList from "../ProductList/ProductList";
import Main from "../Main/Main";
class AppClass extends React.Component {
    constructor(props){
        super(props);
        console.log("App.js Constructor");
    }
    state = {
        products : [
            {id: 1, title:'Book 90', price: 90},
            {id: 2, title:'Book 50', price: 50},
            {id: 3, title:'Book 70', price: 70},
        ],
        show : false,
        auth : false,
    }

    ChangeTitle = (e,id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id;
        });

        const product = {
            ...this.state.products[productIndex]
        }
        product.title = e.target.value;

        const products = [...this.state.products];

        products[productIndex] = product;

        this.setState({products: products});
    };

    ChangePrice = (e,id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id;
        });

        const product = {
            ...this.state.products[productIndex]
        }
        product.price = e.target.value;

        const products = [...this.state.products];

        products[productIndex] = product;

        this.setState({products: products});
    };

    ShowHandler = () => {
        const show = this.state.show;
        this.setState({show: !show});
    };

    DeleteProduct = (index) =>{
        const products = [...this.state.products];
        products.splice(index,1);
        this.setState({products:products});
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate : App");
        return true;
    }

    LoginHandler = () => {
        console.log("Login Auth Handler");
        this.setState({auth: true});
    }

    render(){
        console.log("App.js Render");
        let productsDiv = null;
        if (this.state.show){
            productsDiv = (
                <div className="app-product-list-div">
                    <ProductList 
                        products= { this.state.products }
                        Delete= { this.DeleteProduct }
                        ChangeTitle = { this.ChangeTitle }
                        ChangePrice = { this.ChangePrice }
                        IsAuth = { this.state.auth }
                    />
                </div> 
            );
        }
        return (
            <div>
                <Main 
                ShowHandler = { this.ShowHandler }
                Login = {this.LoginHandler}
                />
                
                { productsDiv }
            </div>
        );
    }
}    
export default AppClass;