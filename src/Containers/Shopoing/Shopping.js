import React from 'react'

import Wrapper from '../../Hoc/wrapper';
import Controls from '../../Components/Controls/controls';
import MyModal from '../../Components/UI/Modal/MyModal';
import Order from '../../Components/Order/Order';
const prices = {
    Product1: 110,
    Product2: 120,
    Product3: 150,
    Product4: 90,
    Product5: 280,
}

class Shopping extends React.Component {
    state = {
        products: {
            'محصول 1': 0,
            'محصول 2': 0,
            'محصول 3': 0,
            'محصول 4': 0,
            'محصول 5': 0,
        },
        totalPrice: 0,
        purchased : false,
    };

    addProductHandler = (type) => {
        console.log("Clicked Add Button");
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
        this.setState({ purchased: flag});
    }
    showHandler = () => {
        this.setState({ purchased: false});
    }
    render() {
        return (
            <Wrapper>
                <Controls
                        productAdd={this.addProductHandler}
                        productRemove={this.removeProductHandler}
                        price = {this.state.totalPrice}
                        productPrice = {this.productPriceHandler}
                        modal={this.purchasedHandler}
                    />
                    <MyModal 
                    show={this.state.purchased}
                    showHandler={this.showHandler}
                    >
                        <Order products={this.state.products}/>
                    </MyModal>
            </Wrapper>
        );
    }

}
export default Shopping;