import React from "react";
import PieChartIcon from "./../Icons/PieChartIcon";
import "./Navbar.scss";

export default function SideNavbar() {
  return (
    <div className="side-navbar">
      <div className="navbar-brand">
        <h4>CryptoCompare</h4>
      </div>
      <div className="navbar-list">
        <br />
        <div className="navbar-item active">
          <PieChartIcon className="nav-icon" />
          <strong style={{ letterSpacing: "1px" }}>Dashboard</strong>
        </div>
      </div>
    </div>
  );
}
