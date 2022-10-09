import React from "react";
import { FcDeleteRow } from "react-icons/fc";
function Designation() {
  return (
    <>
      <h1 className="system-title">Designation</h1>
      <hr />
      <div className="system-section">
        <div className="system">
          <input type="text" name="sugg-education" placeholder="Designation" />
          <button>Add</button>
        </div>
        <div className="sugg-table">
          <table>
            <thead>
              <tr>
                <th>Designation Data</th>
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

export default Designation;
