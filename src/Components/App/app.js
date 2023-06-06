import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Shopping from "../../Containers/Shopping/Shopping";
import Wrapper from "../../Hoc/wrapper";
import MyPanel from "../MyPanel/MyPanel";
import Products from '../Products/Products'
import Percents from '../Percents/Percents';
import About from '../About/About';
import FullPost from "../Axios/FullPost/FullPost";
import FullProduct from "../FullProduct/FullProduct";
class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' Component={Shopping} />
                            <Route path='/:x' Component={FullProduct} />
                            <Route path='/products' Component={Products} />
                            <Route path='/percents' Component={Percents} />
                            <Route path='/about' Component={About} />
                            <Route path="/MyPanel" Component={MyPanel} />
                        </Routes>
                    </Layout>
                </Router>
            </Wrapper>
        );
    }
}

export default App;


