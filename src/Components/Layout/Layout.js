import React from 'react';
import './Layout.css'

import Wrapper from '../../Hoc/wrapper';
//  قسمت های اصلی صفحه سایت را تشکیل میدهد
const Layout = (props) => {
    return (
        <Wrapper>
            <div>Navigation</div>
            <main className='content'>{props.children}</main>

        </Wrapper>
    );
}
export default Layout;