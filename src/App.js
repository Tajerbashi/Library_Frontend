import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Wrapper from './Components/HOC/wrapper'
import { AuthContext } from './Components/Context/AuthContext'
import LoginComponent from './Pages/SEC/Login/loginComponent'
//  Component
import HeaderComponent from "./Components/Header/HeaderComponent";
import IndexComponent from './Pages/Home/Index/IndexComponent'
import FullProduct from "./Pages/Home/FullProduct/FullProduct";
import NavComponent from "./Components/Nav/navComponent";
import Cart from "./Pages/Home/Cart/Cart";
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
    let content = <LoginComponent />
    if (authContext.isAuth) {
        content = (
            <div>
                <Router>
                    <NavComponent />
                    <HeaderComponent />
                    <Routes>
                        <Route path="" Component={IndexComponent} />
                        <Route path="/product/:id" Component={FullProduct} />
                        <Route path="/cart" Component={Cart} />
                    </Routes>
                </Router>
            </div>
        );
    }
    return (
        <Wrapper>
            {content}
        </Wrapper>
    );
};
export default App;