//    ========================= : React 18 : =========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';

import './index.css'
import AuthContextProvider from "./Components/Context/AuthContext";
import { Provider } from 'react-redux'
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </AuthContextProvider>
);