import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './../HOC/wrapper'
import Home from '../Components/Home/Home'
const App = () => {
    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;