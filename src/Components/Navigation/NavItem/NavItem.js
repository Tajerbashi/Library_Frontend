import React from "react";
import './NavItem.css'

const NavItem = (props) => {
    return(
        <li className="nav-items-li">
            <a href={props.link}>{props.children}</a>
        </li>
    );
}
export default NavItem;