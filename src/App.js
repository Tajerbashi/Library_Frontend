import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
//  Components
import Wrapper from './Components/HOC/wrapper'
import HomeComponent from './Pages/CNT/Home/HomeComponent'
import Dashboard from './Pages/CNT/Dashboard/DashboardComponent'
import NavComponent from './Pages/CNT/Home/components/Nav/NavComponent'
const App = (props) => {
    console.log("Props : ", props);
    const isAdmin = false;
    return (
        <Wrapper>
        <NavComponent></NavComponent>

            <Router>
                <Routes>
                    <Route
                        path={"/"}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-dashboard`}
                        element={<Dashboard />} />
                    <Route
                        path={`/TK/app-Home`}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-products`}
                        element={<h1>Product</h1>} />
                    <Route
                        path={`/TK/app-library`}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-authors`}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-chat`}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-user-card`}
                        element={<HomeComponent />} />
                    <Route
                        path={`/TK/app-user-panel`}
                        element={<HomeComponent />} />
                    {
                        isAdmin && isAdmin ? (<Route
                            path={`/TK/app-admin-panel`}
                            element={<HomeComponent />} />) : ""
                    }
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;