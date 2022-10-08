import React from "react";
import "./Settings.css";
function Settings() {
  return (
    <>
      <div className="system-button-section">
        <button>Education</button>
        <button>Religion</button>
        <button>Department</button>
        <button>Designation</button>
        <button>Category</button>
        <button>Union</button>
        <button>Factory</button>
        <button>Area</button>
      </div>
      <div className="system-setting-input"></div>
    </>
  );
}

export default Settings;
