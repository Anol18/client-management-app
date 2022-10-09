import "./Memberlist.css";
import { FcRefresh, FcDeleteRow, FcMoneyTransfer } from "react-icons/fc";
import { useEffect, useState } from "react";
import axios from "axios";

function Memberlist() {
  const [catagory, setCatagory] = useState([]);
  let i = 0;
  // fetching member data to show in table
  useEffect(() => {
    const getData = async () => {
      const getData = await fetch(
        "http://localhost:5000/api/ydhw5612*iuw2/get"
      );
      const data = await getData.json();
      setCatagory(data);
    };
    getData();
  }, [catagory]);

  // delete member list row
  const handleDelete = async (id) => {
    window.confirm("Are you sure want to delete?") &&
      (await axios.delete(`http://localhost:5000/api/deletemember/${id}`));
  };

  // Member list (Subscription button)
  const handleSub = () => {
    console.log("sub");
  };

  // update member information
  const handleUpdate = () => {
    console.log("updated");
  };

  // Member status color function
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
          <thead>
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
          </thead>

          <tbody>
            {/* member list values */}

            {catagory.map((value) => {
              return (
                <tr key={value.id}>
                  <td align="center">{value.id && ++i}</td>
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

                  <td className="operation-btn">
                    <FcRefresh
                      className="list-operation-btn"
                      onClick={() => handleUpdate(console.log("updated"))}
                    />
                    <FcMoneyTransfer
                      className="list-operation-btn"
                      onClick={() => handleSub(console.log("sub"))}
                    />
                    <FcDeleteRow
                      className="list-operation-btn"
                      onClick={() => handleDelete(value.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Memberlist;
