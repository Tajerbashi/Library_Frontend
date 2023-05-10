import React from 'react';
import MainHeader from '../header/header';
import MainNav from '../nav/nav';

const Main = (props) =>{
    const btn = {
        padding: '1rem',  
        margin: '0.2rem auto',
        borderRadius: '0.5rem',
        border: 'none',
        textAlign: 'center',
        alignItems: 'center',
        background: '#000A05',
        color: 'wheat',
        boxShadow : '0 0 10px 5px #0005',
    };
    return (
        <div>
            <MainHeader />
            <MainNav />
            <button style={btn} onClick={props.ShowHandler}>نمایش و پنهان کردن محصولات</button>
            
        </div>
    );
}

export default Main;