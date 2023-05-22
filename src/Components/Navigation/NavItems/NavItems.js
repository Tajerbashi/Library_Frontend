import React from "react";
import './NavItems.css'
import NavItem from "../NavItem/NavItem";
const NavItems = (props) => {
    return(
        <ul className="nav-items-ul">
            <NavItem link="/">خانه</NavItem>
            <NavItem link="/">محصولات</NavItem>
            <NavItem link="/">تخفیف ها</NavItem>
            <NavItem link="/">در بازه ما</NavItem>
        </ul>
    );
}
export default NavItems;