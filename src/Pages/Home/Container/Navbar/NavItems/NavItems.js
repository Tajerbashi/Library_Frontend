import NavItem from './NavItem/NavItem'
import './NavItems.css'
const NavItems = (props) => {
    return (
        <ul className='NavItems-Container'>
            <NavItem href='/'>خانه</NavItem>
            <NavItem href='/products'>محصولات</NavItem>
            <NavItem href='/webLog'>وبلاگ</NavItem>
            <NavItem href='/panel'>پنل</NavItem>
            <NavItem href='/about'>درباره</NavItem>
        </ul>
    );
}
export default NavItems;