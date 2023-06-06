// import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './MyPanel.css'
const MyPanel = (props) => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-between">
            <div className='bg-gradient p-3 rounded-5'>
                <Link to='/MyPanel/element1' className='my-panel-btn'>پنل کاربر</Link>
                <Link to='/MyPanel/element2' className='my-panel-btn'>پنل کاربر</Link>
                <Link to='/MyPanel/element3' className='my-panel-btn'>پنل کاربر</Link>
            </div>
            <div className='bg-gradient p-3 rounded-1'>
            </div>
        </div>
    );
}
export default MyPanel;