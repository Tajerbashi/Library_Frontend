import { Link } from 'react-router-dom';
import './NavItem.css'
const NavItem = (props) => {
    return (
        <li className='NavItem-Container'>
            <Link className='NavItem-Item' to={props.href}>{props.children}</Link>
        </li>
    );
}
export default NavItem;