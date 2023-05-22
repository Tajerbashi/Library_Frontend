import React from 'react';
import './Layout.css'
import Navbar from '../Navigation/Navbar/Navbar';
import Wrapper from '../../Hoc/wrapper';
//  قسمت های اصلی صفحه سایت را تشکیل میدهد
const Layout = (props) => {
    return (
        <Wrapper>
            <Navbar />
            <main className='content'>{props.children}</main>

        </Wrapper>
    );
}
export default Layout;