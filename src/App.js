import "./App.css";
import {Routes, Route } from "react-router-dom";

import Dashboard from "./Layout/Dashboard";

const App = () => {
  return (
      <Routes>
        <Route path={`/`} element={<Dashboard/>} />
      </Routes>
  );
};

export default App;
