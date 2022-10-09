import React from "react";
import { FcDeleteRow } from "react-icons/fc";

function Department() {
  return (
    <>
      <h1 className="system-title">Department</h1>
      <hr />
      <div className="system-section">
        <div className="system">
          <input type="text" name="sugg-education" placeholder="Department" />
          <button>Add</button>
        </div>
        <div className="sugg-table">
          <table>
            <thead>
              <tr>
                <th>Department Data</th>
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

export default Department;
