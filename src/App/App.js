import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './../HOC/wrapper'
import Home from '../Components/Home/Home'
import Products from "../Components/Client/Products/Container/Products";
const App = () => {
    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/products' Component={Products} />
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;