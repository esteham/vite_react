import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";
import "./index.css";
import Sidebar from "./components/sidebar";
import HeaderNav from "./components/headerNav";
// import TopCarouselFade from "./components/exampleCarouselImage";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";
import Component from "./components/component";
import ParentProps from "./pages/props/parentProps";
import SamePageProps from "./pages/props/samePageProps";
import StateEvent from "./pages/state/stateEvent";
import NameInput from "./pages/state/stateNameInput";
import StateInDe from "./pages/state/stateInDe";
import RoleBaseRander from "./pages/ifelse/ifElseRoleBaseRander";
import SwitchRoleBaseRander from "./pages/switchCase/switchRoleBaseRander";
import ListRendering from "./pages/state/listRandering";
import LifeCycleWithModal from "./pages/state/lifeCycleWithModal";

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
          className="fixed top-4 left-4 z-50 bg-warning mt-2 text-white px-2 py-1 rounded shadow-md"
        >
          {isSidebarOpen ? "Hide Sidebar" : "☰"}
        </button>

        {/* Main content */}
        <main
          className={`flex-grow py-8 transition-all duration-300`}
          style={{ marginLeft: isSidebarOpen ? "220px" : "0px" }}
        >
          <HeaderNav />
          {/* <ExampleCarouselImage /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/component" element={<Component />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
            <Route
              path="/lifeCycleWithModal"
              element={<LifeCycleWithModal />}
            />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
