import React from "react";
import Layout from "../Layout/Layout";
import Shopping from "../../Containers/Shoping/Shoping";
import Wrapper from "../../Hoc/wrapper";
class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Layout>
                    <Shopping />
                </Layout>
            </Wrapper>
        );
    }
}

export default App;