import { useEffect } from 'react';
import './Product.css'
import Dynamic from '../../HOC/Dynamic';
import AuthContext from '../Context/Auth-Context'
const Product = (props) => {
    useEffect(() => {
        return () => {
            console.log('::This is From Clean Up In Product.js::');
        }
    }, []);
    return (
        <div className='product-container'>

            <AuthContext.Consumer>
                {
                    (context) => context.auth ?
                        <div>
                            <h6 className='product-title'>{props.title}</h6>
                            <p className='product-price'>{props.price} تومان</p>
                            <button className='product-button'>دیدن</button>
                            <div className='product-configs-con'>
                                <div className='product-config-item'>
                                    <input className='product-inputer-1' placeholder='عنوان جدید وارد کنید ...' onChange={props.ChangeTitle} />
                                    <button className='btn-t' onClick={props.SaveTitle}>+</button>
                                </div>
                                <div className='product-config-item'>
                                    <input type='number' min='0' max='9999999' className='product-inputer-2 text-center' placeholder='قیمت جدید وارد کنید ...' onChange={props.ChangePrice} />
                                    <button className='btn-p' onClick={props.SavePrice}>+</button>
                                </div>
                                <button className='btn text-danger mt-1'
                                    onClick={props.Delete}
                                >حذف محصول</button>
                            </div>
                            {false ? props.index + 1 : null}
                        </div>
                        :
                        null
                }
            </AuthContext.Consumer>
            {/* {props.IsAuth ?
                <div>
                    <h6 className='product-title'>{props.title}</h6>
                    <p className='product-price'>{props.price} تومان</p>
                    <button className='product-button'>دیدن</button>
                    <div className='product-configs-con'>
                        <div className='product-config-item'>
                            <input className='product-inputer-1' placeholder='عنوان جدید وارد کنید ...' onChange={props.ChangeTitle} />
                            <button className='btn-t' onClick={props.SaveTitle}>+</button>
                        </div>
                        <div className='product-config-item'>
                            <input type='number' min='0' max='9999999' className='product-inputer-2 text-center' placeholder='قیمت جدید وارد کنید ...' onChange={props.ChangePrice} />
                            <button className='btn-p' onClick={props.SavePrice}>+</button>
                        </div>
                        <button className='btn text-danger mt-1'
                            onClick={props.Delete}
                        >حذف محصول</button>
                    </div>
                    {false ? props.index + 1 : null}
                </div>
                : null} */}
        </div>
    );
}
export default Product;