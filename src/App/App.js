import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './../HOC/wrapper'
import Home from '../Components/Home/Home'
import Products from "../Components/Client/Products/Container/Products";
import WebLog from "../Components/Client/Weblog/Weblog";
import Panel from "../Components/Client/Panel/Panel";
import About from "../Components/Client/About/About";
import Admin from '../Pages/Admin/Admin'
const App = () => {
    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route path='/Admin::Lib(^-*)' Component={Admin} />
                    <Route path='/' Component={Home} />
                    <Route path='/products' Component={Products} />
                    <Route path='/webLog' Component={WebLog} />
                    <Route path='/panel' Component={Panel} />
                    <Route path='/about' Component={About} />
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;