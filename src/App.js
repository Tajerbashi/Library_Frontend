import "./App.css";
import {Routes, Route } from "react-router-dom";

import Dashboard from "./Layout/Dashboard";
import AdminPanel from './Layout/AdminPanel/AdminPanel'

const App = () => {
  return (
      <Routes>
        <Route path={`/Admin`} element={<AdminPanel/>} />
        <Route path={`/`} element={<Dashboard/>} />
      </Routes>
  );
};

export default App;
