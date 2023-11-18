import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Layout/Dashboard";
import AdminPanel from "./Layout/AdminPanel/AdminPanel";
import Signin from "./Pages/AUT/Signin/Signin";
import Signup from "./Pages/AUT/Signup/Signup";

const App = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Dashboard />} />
      <Route path={`/Admin`} element={<AdminPanel />} />
      <Route path={`/Signin`} element={<Signin />} />
      <Route path={`/Signup`} element={<Signup />} />
    </Routes>
  );
};

export default App;
