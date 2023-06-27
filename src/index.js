//    ========================= : React 18 : =========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import './index.css'
import AuthContextProvider from "./Components/Context/AuthContext";
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/Store/Reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer);

root.render(
    <AuthContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </AuthContextProvider>
);