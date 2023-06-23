//    ========================= : React 18 : =========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import './index.css'
import AuthContextProvider from "./Components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);