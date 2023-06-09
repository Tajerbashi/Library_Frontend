import NavItems from './NavItems/NavItems'
import { useState } from 'react'
import Modal from '../../../UI/Modal/Modal'
import Button from '../../../UI/Button/Button'
import './Navbar.css'
const Navbar = (props) => {
    const [modal, setModal] = useState(false);
    const modalHandler = () => {
        const flag = modal ? false : true;
        console.log("Show Handler :", modal);
        console.log("Set Modal :", setModal);
        setModal(flag);
    }
    return (
        <div className='DefaultContainer Navbar-Container d-flex flex-row justify-content-between'>
            <NavItems />
            <button
                onClick={modalHandler}
                className='Search-Btn'>
            </button>
            <Modal
                show={modal}
                showHandler={modalHandler}
            >
                {props.children}
            </Modal>
        </div>
    );
}
export default Navbar;