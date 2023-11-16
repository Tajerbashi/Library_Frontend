import './Dashboard.css'
import React from "react";
import Main from "./Main";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";
const Dashboard = () => {
  return (
    <div className="container-fluid text-center text-light p-3 dashboard-style">
      <NavbarComponent />
      <Main />
      <FooterComponent />
    </div>
  );
};

export default Dashboard;
