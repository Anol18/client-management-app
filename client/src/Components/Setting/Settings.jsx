import React from "react";
import { GrSidebar } from "react-icons/gr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "../Education/Education";
import SettingSidebar from "../SettingSidebar/SettingSidebar";
import Sidebar from "../Sidebar/Sidebar";
import "./Settings.css";
function Setting() {
  return (
    <>
      <SettingSidebar></SettingSidebar>
    </>
  );
}

export default Setting;
