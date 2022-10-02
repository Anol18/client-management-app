import "./Memberlist.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate, GrEmergency } from "react-icons/gr";
import { useEffect, useState } from "react";

function Memberlist() {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getData = await fetch("http://localhost:5000/api/get");
      const data = await getData.json();
      setCatagory(data);
    };
    getData();
  }, []);

  const memberStatusFunc = (m_status) => {
    const activeColor = {
      color: "white",
      background: "#28d094",
    };
    const inactiveColor = {
      color: "white",
      background: "yellow",
    };
    const blockedColor = {
      color: "white",
      background: "rgb(255, 30, 30)",
    };

    if (m_status === "Active") {
      return activeColor;
    } else if (m_status === "Inactive") {
      return inactiveColor;
    } else if (m_status === "Blocked") {
      return blockedColor;
    }
  };

  return (
    <>
      <div className="member-list-table">
        <table>
          <tr>
            <th>#SL</th>

            <th className="list-photo">Photo</th>

            <th>Member ID</th>
            <th>NID No</th>
            <th>Reg No</th>

            <th>
              Full Name
              <br />
              Father Name
              <br />
              Mother Name
            </th>

            <th>
              DOB
              <br />
              Religion
              <br />
              Gender
            </th>

            <th>
              Mobile
              <br />
              Blood G.
            </th>
            <th>
              Union
              <br />
              Factory
              <br />
              Department
            </th>

            <th>Status</th>
            <th>Option</th>
          </tr>
          {/* member list values */}
          {catagory.map((value) => {
            return (
              <tr key={value.id}>
                <td align="center">{value.id}</td>
                <td align="center" className="list-photo">
                  Photo
                </td>
                <td>Member ID</td>
                <td>{value.nid}</td>

                <td> Reg ID</td>

                <td>
                  {value.full_name}
                  <br />
                  {value.father_name}
                  <br />
                  {value.mother_name}
                </td>

                <td>
                  {value.date_of_birth}
                  <br />
                  {value.religion}
                  <br />
                  {value.gender}
                </td>

                <td>
                  {value.mobile_number}
                  <br />
                  {value.blood_group}
                </td>

                <td>
                  {value.m_union}
                  <br />
                  {value.factory}
                  <br />
                  {value.department}
                </td>
                <td align="center">
                  <span
                    className="active_deactive"
                    style={memberStatusFunc(value.membership_status)}
                  >
                    {value.membership_status}
                  </span>
                </td>
                <td align="center">X X X</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Memberlist;
