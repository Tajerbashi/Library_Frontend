import NavItems from './NavItems/NavItems'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='DefaultContainer Navbar-Container d-flex flex-row justify-content-between'>
            <NavItems/>
            <button className='Search-Btn'>
                
            </button>
        </div>
    );
}
export default Navbar;