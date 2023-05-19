import React, { Component } from 'react';

import './Product.css'
import AuthContext from '../Context/auth-Context'
class Product extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.auth) {
            this.inputRef.current.focus();
            this.inputRef.current.value = "اکنون اینجا هستم";
        }
    }
    render() {
        return (
            <div className='product-container'>
                <AuthContext.Consumer>
                    {
                        (context) =>
                            context.auth ?
                                <div>
                                    <h6 className='product-title'>{this.props.title}</h6>
                                    <p className='product-price'>{this.props.price} تومان</p>
                                    <button className='product-button'>دیدن</button>
                                    <div className='product-configs-con'>
                                        <div className='product-config-item'>
                                            <input ref={this.inputRef} className='product-inputer-1' placeholder='عنوان جدید وارد کنید ...' onChange={this.props.ChangeTitle} />
                                            <button className='btn-t' onClick={this.props.SaveTitle}>+</button>
                                        </div>
                                        <div className='product-config-item'>
                                            <input type='number' min='0' max='9999999' className='product-inputer-2 text-center' placeholder='قیمت جدید وارد کنید ...' onChange={this.props.ChangePrice} />
                                            <button className='btn-p' onClick={this.props.SavePrice}>+</button>
                                        </div>
                                        <button className='btn text-danger mt-1'
                                            onClick={this.props.Delete}>
                                            حذف محصول
                                        </button>
                                    </div>
                                    <div>
                                        {false ? this.props.index + 1 : null}
                                    </div>
                                </div>
                                : null
                    }
                </AuthContext.Consumer>
             </div>
        );
    }
}
export default Product;