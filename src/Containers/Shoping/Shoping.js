import React from 'react'
import { Routes, Route, Link, Switch, Redirect } from 'react-router-dom';
import Wrapper from '../../Hoc/wrapper';
import Controls from '../../Components/Controls/Controls';
import MyModal from '../../Components/UI/Modal/MyModal';
import Order from '../../Components/Order/Order';
import Axios from '../../Components/Axios/Axios';
import axios from '../../Services/Order/orderServices'
import Loader from '../../Components/UI/Loader/Loader';
import ProductRegister from '../../Components/ProductRegistery/ProductRegister';
import Products from '../../Components/Products/Products'
import Percents from '../../Components/Percents/Percents';
import About from '../../Components/About/About';
import FullProduct from '../../Components/FullProduct/FullProduct';



const prices = {
    'محصول 1': 110,
    'محصول 2': 120,
    'محصول 3': 150,
    'محصول 4': 250,
    'محصول 5': 550,
}

class Shopping extends React.Component {
    state = {
        products: null,
        customer: null,
        totalPrice: 0,
        purchased: false,
        axios: false,
        router: false,
        loading: false,
        register: false,
        submitted: false,
    };

    componentDidMount() {
        let data = [];
        axios
            .get('/orders.json')
            .then(res => {
                data = Object.entries(res.data);
                data = data[0][1];
                // console.log(!data);
                this.setState({ products: data.products });
            })
            .catch(err => {
                this.setState({ products: prices });
                // console.log(err);
                // alert('اطلاعاتی در دتابس وجود ندارد ... !');
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
    routerHandler = () => {
        let flag = this.state.router ? false : true;
        this.setState({ router: flag });
        console.log(flag);
        console.log(this.state.router);
    }

    render() {
        let order = null;
        let controls = null;
        let products = null;
        let percents = null;
        let about = null;

        if (this.state.loading) {
            order = <Loader />;
        }
        if (this.state.products) {
            products = <Products />
            percents = <Percents />
            about = <About />
            controls = (<Controls
                productAdd={this.addProductHandler}
                productRemove={this.removeProductHandler}
                price={this.state.totalPrice}
                productPrice={this.productPriceHandler}
                modal={this.purchasedHandler}
                axios={this.axiosHandler}
                router={this.routerHandler}
                productRegister={this.productRegisterHandler}
            />)
            order = (<Order
                continue={this.purchasedContinueHandler}
                cancel={this.showHandler}
                products={this.state.products}
                total={this.state.totalPrice}
            />);


        }
        return (
            <Wrapper>
                <Routes>
                    <Route path='/' element={controls} />
                    <Route path='/products' element={products} />
                    <Route path='/percents' element={percents} />
                    <Route path='/about' element={about} />
                    <Route path='/:id' Component={FullProduct} />
                    <Route element={<h2 style={{
                        color: 'red',
                        backgroundColor: 'black',
                        margin: '1rem',
                        padding: '1rem',
                        borderRadius: '1rem'
                    }}>صفحه ای یافت نشد آدرس را درست وارد کنید</h2>} />
                    {/* <Route path='/:Id' exact element={fullProduct} /> */}
                </Routes>
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
                    <ProductRegister
                    />
                </MyModal>

            </Wrapper>
        );
    }

}
export default Shopping;