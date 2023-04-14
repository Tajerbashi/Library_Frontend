//    ========================= : React 18 : =========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/app';

import './index.css'
ReactDOM.createRoot( document.getElementById("root")).render(<App />);
//  OR
//    ========================= : React 17 : =========================
// import './index.css'
// in index.js just import App component because it's will be the parent component and all components will be children of App component so import in App.js component

// -------------------  Older Version of React -------------------
// import ReactDOM from "react-dom";
// const element = React.createElement
// (
//         'div',
//         {id:"app",className:"container"},
//         'Welcome to React Application'
//     );
// ReactDOM.render(element, document.getElementById("root"));
                                                             
// -------------------  New Version of React -------------------
// import ReactDOM from "react-dom";
// import App from './App'
                                                             
// ReactDOM.render(<App />, document.getElementById("root"))                                                          
