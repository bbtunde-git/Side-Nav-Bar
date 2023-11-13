import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard.jsx";
import SMS from "./Pages/SMS.jsx";
import Voice from "./Pages/Voice.jsx";
import USSD from "./Pages/USSD.jsx";
import Airtime from "./Pages/Airtime.jsx";
import MobileData from "./Pages/MobileData.jsx";
import Settings from "./Pages/Settings.jsx";
import LaunchSimulator from "./Pages/LaunchSimulator.jsx";
import Slack from "./Pages/Slack.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path ="/"element={<Dashboard/>}/>
          <Route path ="/dashboard"element={<Dashboard/>}/>
          <Route path ="/sms"element={<SMS/>}/>
          <Route path ="/voice"element={<Voice/>}/>
          <Route path ="/ussd"element={<USSD/>}/>
          <Route path ="/airtime"element={<Airtime/>}/>
          <Route path ="/mobiledata"element={<MobileData/>}/>
          <Route path ="/settings"element={<Settings/>}/>
          <Route path ="/launchsimulator"element={<LaunchSimulator/>}/>
          <Route path ="/slack"element={<Slack/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;