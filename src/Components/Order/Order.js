import React from "react";
import Wrapper from "../../Hoc/wrapper";
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
            <ul className="ul-list">
                {summery}
            </ul>
        </Wrapper>
    );
}
export default Order;