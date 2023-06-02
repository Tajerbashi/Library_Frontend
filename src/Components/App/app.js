import React from "react";
import Layout from "../Layout/Layout";
import Shopping from "../../Containers/Shopoing/Shopping";
import { 
    BrowserRouter as Router
 } from 'react-router-dom';
class App extends React.Component {
    render(){
        return (
            <div>
                <Layout>
                    <Shopping/>
                </Layout>
            </div>
        );
    }
}

export default App;