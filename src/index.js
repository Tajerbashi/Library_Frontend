//    ========================= : React 18 : =========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';

import './index.css'
import AuthContextProvider from "./Components/Context/AuthContext";
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/Reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer);

root.render(
    <AuthContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </AuthContextProvider>
);