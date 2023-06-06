import React from "react";
import './NavItems.css'
import NavItem from "../NavItem/NavItem";
const NavItems = (props) => {
    return (
        <ul className="nav-items-ul">
            <NavItem search="post" link="/">خانه</NavItem>
            <NavItem search="product" link="/products">محصولات</NavItem>
            <NavItem search="percent" link="/percents">تخفیف ها</NavItem>
            <NavItem search="about" link="/about">در باره ما</NavItem>
            <div className="bg-gradient">
                <NavItem search="Account" link="/MyPanel">پنل کاربر</NavItem>
            </div>
        </ul>
    );
}
export default NavItems;