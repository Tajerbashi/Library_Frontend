import React from "react";
import Wrapper from "../../Hoc/wrapper";
import Button from "../UI/Button/Button";
import './Order.css'
const Order = (props) => {
    const summery = Object.keys(props.products).map(item => {
        return (
            <li className="li-item" key={item}>
                <span>{item}</span> :
                <span>{props.products[item]}</span>
            </li>
        );
    });
    return (
        <Wrapper>
            <h3 className="title">سبد سفارشات</h3>
            <ul className="ul-list">{summery}</ul>
            <div className="total">قیمت کل سبد : {props.total}</div>
            <p className="msg">آیا میخواهید ادامه دهید یا خیر ؟</p>
            <Button click={props.continue} btnType="yes">بلی</Button>
            <Button click={props.cancel} btnType="no">خیر</Button>
        </Wrapper>
    );
}
export default Order;