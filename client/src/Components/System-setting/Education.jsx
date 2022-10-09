import React from "react";
import "./SystemSettingStyle.css";
import { FcDeleteRow } from "react-icons/fc";

function Education() {
  return (
    <>
      <h1 className="system-title">Education</h1>
      <hr />
      <div className="system-section">
        <div className="system">
          <input type="text" name="sugg-education" placeholder="Education" />
          <button>Add</button>
        </div>
        <div className="sugg-table">
          <table>
            <thead>
              <tr>
                <th>Education Data</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>aa</td>
                <td>
                  <FcDeleteRow className="system-data-btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Education;
