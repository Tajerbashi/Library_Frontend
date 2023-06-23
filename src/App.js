import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './Components/HOC/wrapper'
import Home from './Pages/Home/Home'
import Products from "./Pages/Client/Products/Products";
import WebLog from "./Pages/Client/Weblog/Weblog";
import Panel from "./Pages/Client/Panel/Panel";
import About from "./Pages/Client/About/About";
import Admin from './Pages/Admin/Admin'
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