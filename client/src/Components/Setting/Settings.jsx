import { React, useState } from "react";
import "./Settings.css";
import Education from "../System-setting/Education";
import Religion from "../System-setting/Religion";
import Department from "../System-setting/Department";
import Designation from "../System-setting/Designation";
import Category from "../System-setting/Category";
import Union from "../System-setting/Union";
import Factory from "../System-setting/Factory";
import Area from "../System-setting/Area";
function Settings() {
  const [active, setActive] = useState("Education");

  return (
    <>
      <div className="system-setting">
        <div className="system-button-section">
          <button onClick={() => setActive("Education")}>Education</button>
          <button onClick={() => setActive("Religion")}>Religion</button>
          <button onClick={() => setActive("Department")}>Department</button>
          <button onClick={() => setActive("Designation")}>Designation</button>
          <button onClick={() => setActive("Category")}>Category</button>
          <button onClick={() => setActive("Union")}>Union</button>
          <button onClick={() => setActive("Factory")}>Factory</button>
          <button onClick={() => setActive("Area")}>Area</button>
        </div>

        <div className="system-setting-input">
          {active === "Education" && <Education />}
          {active === "Religion" && <Religion />}
          {active === "Department" && <Department />}
          {active === "Designation" && <Designation />}
          {active === "Category" && <Category />}
          {active === "Union" && <Union />}
          {active === "Factory" && <Factory />}
          {active === "Area" && <Area />}
        </div>
      </div>
    </>
  );
}

export default Settings;
