import React from 'react'

import Wrapper from '../../Hoc/wrapper';
import Controls from '../../Components/Controls/controls';

const prices = {
    prduct1: 110,
    prduct2: 120,
    prduct3: 150,
    prduct4: 90,
    prduct5: 180,
}

class Shopping extends React.Component {
    state = {
        products: {
            prduct1: 0,
            prduct2: 0,
            prduct3: 0,
            prduct4: 0,
            prduct5: 0,
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

    render() {
        return (
            <Wrapper>
                <div>
                    <Controls
                        productAdd={this.addProductHandler}
                        productRemove={this.removeProductHandler}
                    />
                </div>
            </Wrapper>
        );
    }

}
export default Shopping;