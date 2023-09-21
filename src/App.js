import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './Components/HOC/wrapper'

//  Routes
import PageRoutes from './Pages/routes'
//  Component

const App = (props) => {
    console.log("Props : ",props);
    return (
        <Wrapper>
            <Router>
                <Routes>
                {PageRoutes.map((route, key) => (
            <Route
              key={key}
              path={`${route.path}`}
              Component={route.component}
            />
          ))}
                </Routes>
            </Router>
        </Wrapper>
    );
};
export default App;