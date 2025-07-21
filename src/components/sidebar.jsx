import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = useState({
    props: false,
    state: false,
    role: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus({ ...openMenus, [menu]: !openMenus[menu] });
  };

  return (
    <nav
      className={`w-[220px] h-screen fixed top-10 left-0 bg-dark text-white p-5 overflow-y-auto z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Props Menu */}
      <div>
        <div
          onClick={() => toggleMenu("props")}
          className="cursor-pointer font-bold mb-1 select-none flex justify-between items-center text-align-center"
        >
          Props <span>{openMenus.props ? "▲" : "▼"}</span>
        </div>
        {openMenus.props && (
          <div className="pl-4 mb-3">
            <Link to="/parentProps" className="block mb-1 hover:text-blue-600">
              Props 1
            </Link>
            <Link
              to="/samePageProps"
              className="block mb-1 hover:text-blue-600"
            >
              Props 2
            </Link>
          </div>
        )}
      </div>

      {/* State Menu */}
      <div>
        <div
          onClick={() => toggleMenu("state")}
          className="cursor-pointer font-bold mb-1 select-none flex justify-between items-center text-align-center"
        >
          State <span>{openMenus.state ? "▲" : "▼"}</span>
        </div>
        {openMenus.state && (
          <div className="pl-4 mb-3">
            <Link to="/stateEvent" className="block mb-1 hover:text-blue-600">
              Event (State)
            </Link>
            <Link
              to="/stateNameInput"
              className="block mb-1 hover:text-blue-600"
            >
              Name Input
            </Link>
            <Link to="/stateInDe" className="block mb-1 hover:text-blue-600">
              Increment/Decrement
            </Link>
            <Link
              to="/listRandering"
              className="block mb-1 hover:text-blue-600"
            >
              List
            </Link>
            <Link
              to="/lifeCycleWithModal"
              className="block mb-1 hover:text-blue-600"
            >
              Life Cycle
            </Link>
          </div>
        )}
      </div>

      {/* Role Menu */}
      <div>
        <div
          onClick={() => toggleMenu("role")}
          className="cursor-pointer font-bold mb-1 select-none flex justify-between items-center"
        >
          Role Rendering <span>{openMenus.role ? "▲" : "▼"}</span>
        </div>
        {openMenus.role && (
          <div className="pl-4 mb-3">
            <Link
              to="/ifElseRoleBaseRander"
              className="block mb-1 hover:text-blue-600"
            >
              If-Else Role
            </Link>
            <Link
              to="/switchRoleBaseRander"
              className="block mb-1 hover:text-blue-600"
            >
              Switch Role
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
