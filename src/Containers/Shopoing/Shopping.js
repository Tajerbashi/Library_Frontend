import React from 'react'

import Wrapper from '../../Hoc/wrapper';
import Controls from '../../Components/Controls/controls';
import MyModal from '../../Components/UI/Modal/MyModal';
import Order from '../../Components/Order/Order';
import Axios from '../../Components/Axios/Axios';
import axios from './../../Services/Order/orderServices'
import Loader from '../../Components/UI/Loader/Loader';
import ProductRegister from '../../Components/Product/ProductRegister';

const prices = {
    'محصول 1': 110,
    'محصول 2': 120,
    'محصول 3': 150,
}

class Shopping extends React.Component {
    state = {
        products: null,
        customer: null,
        totalPrice: 0,
        purchased: false,
        axios: false,
        loading: false,
        register: false,
    };

    componentDidMount() {
        let data = [];
        axios
            .get('/orders.json')
            .then(res => {
                data = Object.entries(res.data);
                data = data[0][1];
                this.setState({ products: data.products });
            })
            .catch(err => {
                console.log(err);
            });
    }
    addProductHandler = (type) => {
        const prevCount = this.state.products[type];
        const UpdateCount = prevCount + 1;
        const updateProducts = {
            ...this.state.products
        }
        updateProducts[type] = UpdateCount;
        const priceAdd = prices[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + priceAdd;
        this.setState({ totalPrice: newPrice, products: updateProducts });
    }
    removeProductHandler = (type) => {
        console.log("Clicked Remove Button");
        const prevCount = this.state.products[type];
        const UpdateCount = prevCount - 1;
        const updateProducts = {
            ...this.state.products
        }
        updateProducts[type] = UpdateCount;
        const priceSub = prices[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice - priceSub;
        this.setState({ totalPrice: newPrice, products: updateProducts });
    }
    productPriceHandler = (type) => {
        return prices[type];
    }
    purchasedHandler = () => {
        let flag = this.state.purchased ? false : true;
        this.setState({ purchased: flag });
    }
    showHandler = () => {
        this.setState({ purchased: false });
        this.setState({ axios: false });
        this.setState({ register: false });
    }
    purchasedContinueHandler = () => {
        this.setState({ loading: true });
        const data = {
            products: this.state.products,
            title: this.state.title,
            price: this.state.totalPrice,
            customer: {
                name: 'Kaihan',
                family: 'Tajer',
                email: 'kaihan@gmail.com',
            }
        }
        axios
            .post("/orders.json", data)
            .then(res => {
                this.setState({ loading: false, purchased: false });
            })
            .catch(err => {
                this.setState({ loading: false, purchased: false });
            });
        // this.setState({ purchased: false});
    }
    productRegisterHandler = () => {
        this.setState({ register: true });
    }
    axiosHandler = () => {
        let flag = this.state.axios ? false : true;
        this.setState({ axios: flag });
    }
    render() {
        let order = null;
        let productReg = null;
        if (this.state.loading) {
            order = <Loader />;
        }
        let controls = <Loader />;
        if (this.state.products) {
            controls = (<Controls
                productAdd={this.addProductHandler}
                productRemove={this.removeProductHandler}
                price={this.state.totalPrice}
                productPrice={this.productPriceHandler}
                modal={this.purchasedHandler}
                axios={this.axiosHandler}
                productRegister={this.productRegisterHandler}
            />)
            order = (<Order
                continue={this.purchasedContinueHandler}
                cancel={this.showHandler}
                products={this.state.products}
                total={this.state.totalPrice}
            />)
            productReg = (
                <ProductRegister
                />
            )
        }
        return (
            <Wrapper>
                {controls}
                <MyModal
                    show={this.state.purchased}
                    showBackDrop={this.showHandler}
                >
                    {order}
                </MyModal>
                <MyModal
                    show={this.state.axios}
                    showBackDrop={this.showHandler}
                >
                    <Axios
                    />
                </MyModal>
                <MyModal
                    show={this.state.register}
                    showBackDrop={this.showHandler}
                >
                    {productReg}
                </MyModal>
            </Wrapper>
        );
    }

}
export default Shopping;