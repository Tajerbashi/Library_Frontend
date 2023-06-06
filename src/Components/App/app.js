import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../Layout/Layout";
import Shopping from "../../Containers/Shoping/Shoping";
import Wrapper from "../../Hoc/wrapper";
class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Router>
                    <Layout>
                        <Shopping />
                    </Layout>
                </Router>
            </Wrapper>
        );
    }
}

export default App;


