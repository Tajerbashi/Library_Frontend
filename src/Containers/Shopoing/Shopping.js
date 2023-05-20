import React from 'react'

import Wrapper from '../../Hoc/wrapper';
import Controls from '../../Components/Controls/controls';

const prices = {
    Product1: 110,
    Product2: 120,
    Product3: 150,
    Product4: 90,
    Product5: 180,
}

class Shopping extends React.Component {
    state = {
        products: {
            Product1: 0,
            Product2: 0,
            Product3: 0,
            Product4: 0,
            Product5: 0,
        },
        totalPrice: 0,
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
        console.log(prices[type]);
        return prices[type];
    }
    render() {
        return (
            <Wrapper>
                <div>
                    <Controls
                        productAdd={this.addProductHandler}
                        productRemove={this.removeProductHandler}
                        price = {this.state.totalPrice}
                        productPrice = {this.productPriceHandler}
                    />
                </div>
            </Wrapper>
        );
    }

}
export default Shopping;