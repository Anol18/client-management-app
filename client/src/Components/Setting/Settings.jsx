import React from "react";
import { GrSidebar } from "react-icons/gr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "../Education/Education";
import SettingSidebar from "../SettingSidebar/SettingSidebar";
import "./Settings.css";
function Setting() {
  return (
    <>
      <SettingSidebar>
        <Route path="/education" element={<Education />} />
      </SettingSidebar>
      {/* <BrowserRouter></BrowserRouter> */}
    </>
  );
}

export default Setting;
