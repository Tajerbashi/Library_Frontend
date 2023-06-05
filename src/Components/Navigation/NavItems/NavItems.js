import React from "react";
import './NavItems.css'
import NavItem from "../NavItem/NavItem";
const NavItems = (props) => {
    return(
        <ul className="nav-items-ul">
            <NavItem search="post" link="/">خانه</NavItem>
            <NavItem search="product" link="/products">محصولات</NavItem>
            <NavItem search="percent" link="/percents">تخفیف ها</NavItem>
            <NavItem search="about" link="/about">در باره ما</NavItem>
        </ul>
    );
}
export default NavItems;