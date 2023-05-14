import React,{ useEffect }  from 'react';
import MainHeader from '../header/header';
import MainNav from '../nav/nav';
import Container  from '../../HOC/Container';
const Main = (props) =>{
    useEffect(() => {
        console.log('===Main Use Effect Started');
        setTimeout(() => {
            console.log('===This is SetTimeout in 2s from Main Component');
        },2000);
    },[props.changeUseEffect]);

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
        <Container>
            <MainHeader />
            <MainNav />
            <button style={btn} onClick={props.ShowHandler}>نمایش و پنهان کردن محصولات</button>
        </Container>
            
    );
}

export default Main;