import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    props: false,
    state: false,
    role: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus({ ...openMenus, [menu]: !openMenus[menu] });
  };

  return (
    <nav style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      position: "fixed",
      top: 0,
      left: 0,
      overflowY: "auto"
    }}>
      <Link to="/" style={{ marginBottom: "10px", display: "block" }}>Home</Link>
      <Link to="/about" style={{ marginBottom: "10px", display: "block" }}>About</Link>
      <Link to="/component" style={{ marginBottom: "10px", display: "block" }}>Component</Link>

      {/* Props Menu with Submenu */}
      <div>
        <div onClick={() => toggleMenu('props')} style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "5px" }}>
          Props {openMenus.props ? "▲" : "▼"}
        </div>
        {openMenus.props && (
          <div style={{ paddingLeft: "15px", marginBottom: "10px" }}>
            <Link to="/parentProps" style={{ display: "block", marginBottom: "5px" }}>Props 1</Link>
            <Link to="/samePageProps" style={{ display: "block", marginBottom: "5px" }}>Props 2</Link>
          </div>
        )}
      </div>

      {/* State Menu */}
      <div>
        <div onClick={() => toggleMenu('state')} style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "5px" }}>
          State {openMenus.state ? "▲" : "▼"}
        </div>
        {openMenus.state && (
          <div style={{ paddingLeft: "15px", marginBottom: "10px" }}>
            <Link to="/stateEvent" style={{ display: "block", marginBottom: "5px" }}>Event (State)</Link>
            <Link to="/stateNameInput" style={{ display: "block", marginBottom: "5px" }}>Name Input</Link>
            <Link to="/stateInDe" style={{ display: "block", marginBottom: "5px" }}>Increment/Decrement</Link>
            <Link to="/listRandering" style={{ display: "block", marginBottom: "5px" }}>List</Link>
          </div>
        )}
      </div>

      {/* Role Menu */}
      <div>
        <div onClick={() => toggleMenu('role')} style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "5px" }}>
          Role Rendering {openMenus.role ? "▲" : "▼"}
        </div>
        {openMenus.role && (
          <div style={{ paddingLeft: "15px", marginBottom: "10px" }}>
            <Link to="/ifElseRoleBaseRander" style={{ display: "block", marginBottom: "5px" }}>If-Else Role</Link>
            <Link to="/switchRoleBaseRander" style={{ display: "block", marginBottom: "5px" }}>Switch Role</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
