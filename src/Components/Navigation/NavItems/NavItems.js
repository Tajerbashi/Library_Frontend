import React from "react";
import './NavItems.css'
import NavItem from "../NavItem/NavItem";
const NavItems = (props) => {
    return(
        <ul className="nav-items-ul">
            <NavItem link="/">خانه</NavItem>
            <NavItem link="/products">محصولات</NavItem>
            <NavItem link="/percents">تخفیف ها</NavItem>
            <NavItem link="/about">در باره ما</NavItem>
        </ul>
    );
}
export default NavItems;