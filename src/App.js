import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './Components/HOC/wrapper'
import { AuthContext } from './Components/Context/AuthContext'
//  Component
import HeaderComponent from "./Components/Header/HeaderComponent";
import NavComponent from "./Components/Nav/navComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import Home from "./Pages/Home/Home/Home";

//#region  code
// import routes from "./Pages/Router";
// const App = () => {
//     let router = routes.map((item, key) => {
//         console.log("ITEM : ", item);
//         return (<Route key={key} path={item.url} Component={item.component} />);
//     });
//     console.log("router :",router);
//     const authContext = useContext(AuthContext);
//     let content = <LoginComponent />
//     if (authContext.isAuth) {
//         content = <Router>
//             <Routes>
//                 {router}
//             </Routes>
//         </Router>
//     }
//     return (
//         <Wrapper>
//             {content}
//         </Wrapper>
//     );
// };
//#endregion
const App = () => {
    const authContext = useContext(AuthContext);
    // let content = <LoginComponent />
    // if (authContext.isAuth) {
    //     content = (
    //         <div>
    //             <Router>
    //                 <NavComponent />
    //                 <HeaderComponent />
    //                 <Routes>
    //                 </Routes>
    //             </Router>
    //         </div>
    //     );
    // }
    return (
        <Wrapper>
            <Router>
                <NavComponent />
                <HeaderComponent />
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
                <FooterComponent />
            </Router>
        </Wrapper>
    );
};
export default App;