import NavItems from './NavItems/NavItems'
import './Navbar.css'
import useDarkMode from '../../../../Hooks/dark-mode'


const Navbar = (props) => {
    const [theme, toggleTheme] = useDarkMode();
    let styles={
        background: theme === 'dark' ? '#123' : '',
        color: theme === 'dark' ? '#eee' : '#000',
        transition: '0.2s all',
        textAlign: 'center'
    }
    return (
        <div
            className='DefaultContainer Navbar-Container d-flex flex-row justify-content-between'
            style={styles}
        >
            <NavItems />
            <button
            style={styles}
                type='button'
                onClick={toggleTheme}
                className='Search-Btn'>
            </button>
        </div>
    );
}
export default Navbar;