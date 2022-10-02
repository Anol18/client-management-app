import "./Memberlist.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
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
  return (
    <>
      <div className="memberlist-container">
        <div className="member-list-header">
          <h3>Member List</h3>
          <div className="member-title-item">
            <table>
              <tr>
                <th>#SL</th>
              </tr>

              <tr>
                <th>Photo</th>
              </tr>

              <tr>
                <th>
                  Member ID <br /> NID No <br />
                  Reg No
                </th>
              </tr>

              <tr>
                <th>
                  Full Name <br />
                  Father Name <br />
                  Mother Name
                </th>
              </tr>

              <tr>
                <th>
                  DOB <br /> Religion <br />
                  Gender
                </th>
              </tr>

              <tr>
                <th>
                  Mobile <br />
                  Blood G.
                </th>
              </tr>

              <tr>
                <th>
                  Union <br />
                  Factory <br />
                  Department
                </th>
              </tr>

              <tr>
                <th>Status</th>
              </tr>

              <tr>
                <th>Option</th>
              </tr>
            </table>
            <hr />
          </div>
        </div>

        {catagory.map((value) => {
          return (
            <>
              <div className="member-list-data">
                <table key={value.id}>
                  <tr>
                    <tr>
                      <td>{value.id}</td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td> Photo</td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td>
                        Member ID <br /> {value.nid} <br />
                        Reg No
                      </td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td>
                        {value.full_name} <br />
                        {value.father_name} <br />
                        {value.mother_name}
                      </td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td>
                        {value.date_of_birth} <br /> {value.religion} <br />
                        {value.gender}
                      </td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td>
                        {value.mobile_number} <br />
                        {value.blood_group}
                      </td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      <td>
                        {value.m_union} <br />
                        {value.factory} <br />
                        {value.department}
                      </td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      {" "}
                      <td>Status</td>
                    </tr>
                  </tr>

                  <tr>
                    <tr>
                      {" "}
                      <td>
                        <GrDocumentUpdate />
                      </td>
                      <td>
                        <MdDelete />
                      </td>
                      <td>Option</td>
                    </tr>
                  </tr>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Memberlist;
