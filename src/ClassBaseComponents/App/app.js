import React from "react"
import './app.css'

import ProductList from "../ProductList/ProductList";
import Main from "../Main/Main";
import AuthContext from '../Context/auth-Context';
class AppClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("App.js Constructor");
        this.state = {
            products: [
                { id: 1, title: 'Book 90', price: 90 },
                { id: 2, title: 'Book 50', price: 50 },
                { id: 3, title: 'Book 70', price: 70 },
            ],
            show: true,
            auth: false,
        };
    }
    

    ChangeTitle = (e, id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id;
        });

        const product = {
            ...this.state.products[productIndex]
        }
        product.title = e.target.value;

        const products = [...this.state.products];

        products[productIndex] = product;

        this.setState({ products: products });
    };

    ChangePrice = (e, id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id;
        });

        const product = {
            ...this.state.products[productIndex]
        }
        product.price = e.target.value;

        const products = [...this.state.products];

        products[productIndex] = product;

        this.setState({ products: products });
    };

    ShowHandler = () => {
        const show = this.state.show ? false : true;
        console.log("ShowHandler : show => ",this.state.show);
        console.log("show : ",show);
        this.setState({show: show});
    };

    DeleteProduct = (index) => {
        const products = [...this.state.products];
        products.splice(index, 1);
        this.setState({ products: products });
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    LoginHandler = async () => {
        var flag = this.state.auth ? false : true;
        await this.setState({ auth: flag });
    }

    render() {
        let productsDiv = null;
        if (this.state.show) {
            productsDiv = (
                <div className="app-product-list-div">
                    <ProductList
                        products={this.state.products}
                        Delete={this.DeleteProduct}
                        ChangeTitle={this.ChangeTitle}
                        ChangePrice={this.ChangePrice}
                        IsAuth={this.state.auth}
                    />
                </div>
            );
        }
        return (
            <div>
                <Main
                    ShowHandler={this.ShowHandler}
                    LoginHandler={this.LoginHandler}
                />

                {productsDiv}
            </div>
        );
    }
}
export default AppClass;