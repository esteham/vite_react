import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/component" style={{ marginRight: "10px" }}>
        Component
      </Link>
      <Link to="/parentProps" style={{ marginRight: "10px" }}>
        Props
      </Link>
      <Link to="/samePageProps" style={{ marginRight: "10px" }}>
        Props2
      </Link>
      <Link to="/stateEvent" style={{ marginRight: "10px" }}>
        Event (State)
      </Link>
      <Link to="/stateNameInput" style={{ marginRight: "10px" }}>
        NameInput(State)
      </Link>
      <Link to="/stateInDe" style={{ marginRight: "10px" }}>
        Incri/Decri(State)
      </Link>
      <Link to="/ifElseRoleBaseRander" style={{ marginRight: "10px" }}>
        If Else Role
      </Link>
      <Link to="/switchRoleBaseRander" style={{ marginRight: "10px" }}>
        Switch Role
      </Link>
      <Link to="/listRandering" style={{ marginRight: "10px" }}>
        List (State)
      </Link>
    </nav>
  );
};

export default Navbar;
