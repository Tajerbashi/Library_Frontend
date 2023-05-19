import React, { useEffect, useRef, useContext } from 'react';
import MainHeader from '../header/header';
import MainNav from '../nav/nav';
import Dynamic from '../../HOC/Dynamic';
import AuthContext from '../Context/Auth-Context'
const Main = (props) => {
    const btnRef = useRef(null);

    useEffect(() => {
        btnRef.current.click();
        return () => {
            console.log('::This is From Clean Up In Main.js::');
        }
    }, []);
    const authContext = useContext(AuthContext);
    const btn = {
        padding: '1rem',
        margin: '0.2rem auto',
        borderRadius: '0.5rem',
        border: 'none',
        textAlign: 'center',
        alignItems: 'center',
        background: '#000A05',
        color: 'wheat',
        boxShadow: '0 0 10px 5px #0005',
    };
    return (
        <React.Fragment>
            {/* <Container> */}
            <MainHeader />
            <MainNav />
            <div className='container d-flex flex-row justify-content-around'>
                <button
                    ref={btnRef}
                    style={btn}
                    onClick={props.ShowHandler}>
                    نمایش و پنهان کردن محصولات
                </button>
                <button
                    style={btn}
                    onClick={props.login}>
                    خروج / ورود
                </button>
                <button
                    style={btn}
                    onClick={authContext.login}>
                    Context Login
                </button>

            </div>
            {/* </Container> */}
        </React.Fragment>
    );
}

export default Dynamic(Main, 'main');