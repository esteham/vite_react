// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Sidebar from "./components/sidebar";
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
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content shifted right */}
        <main
          className="flex-grow px-4 py-8"
          style={{ marginLeft: "260px" }} // match sidebar width
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
            <Route path="/switchRoleBaseRander" element={<SwitchRoleBaseRander />} />
            <Route path="/listRandering" element={<ListRendering />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
