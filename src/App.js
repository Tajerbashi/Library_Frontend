import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
//  Components
import Wrapper from './Components/HOC/wrapper'
import Dashboard from './Pages/CNT/Dashboard/DashboardComponent'
import HomeComponent from './Pages/CNT/Home/HomeComponent'

const App = (props) => {
    console.log("Props : ", props);

    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route
                        path={`app-dashboard`}
                        element={<Dashboard />} />
                    <Route
                        path={`app-Home`}
                        element={<HomeComponent />} />
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;