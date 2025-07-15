import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import About from "./pages/about";
import Component from "./pages/component";
import ParentProps from "./pages/props/parentProps";
import SamePageProps from "./pages/props/samePageProps";
import StateEvent from "./pages/state/stateEvent";
import NameInput from "./pages/state/stateNameInput";
import StateInDe from "./pages/state/stateInDe";
import RoleBaseRander from "./pages/ifelse/ifElseRoleBaseRander";
import SwitchRoleBaseRander from "./pages/switchCase/switchRoleBaseRander";
import ListRendering from "./pages/state/listRandering";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50 relative">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded shadow-md"
        >
          {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>

        {/* Main content */}
        <main
          className={`flex-grow px-4 py-8 transition-all duration-300`}
          style={{ marginLeft: isSidebarOpen ? "220px" : "0px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/component" element={<Component />} />
            <Route path="/parentProps" element={<ParentProps />} />
            <Route path="/samePageProps" element={<SamePageProps />} />
            <Route path="/stateEvent" element={<StateEvent />} />
            <Route path="/stateNameInput" element={<NameInput />} />
            <Route path="/stateInDe" element={<StateInDe />} />
            <Route path="/ifElseRoleBaseRander" element={<RoleBaseRander />} />
            <Route
              path="/switchRoleBaseRander"
              element={<SwitchRoleBaseRander />}
            />
            <Route path="/listRandering" element={<ListRendering />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
