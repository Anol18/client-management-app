import "./Member.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import React, { useState } from "react";
import Axios from "axios";
function Member() {
  // using state for input data capture
  const initialObj = {
    catagory: "",
    factory: "",
    union: "",
    joiningdate: "",
    factoryjoindate: "",
    uniondesignation: "",
    department: "",
    factoryid: "",
    factorydesignation: "",
    wpcdesignation: "",
    oshcommiteedesignation: "",
    memberstatus: "",
    ispaid: "",
    fname: "",
    lname: "",
    fullname: "",
    fathername: "",
    mothername: "",
    gender: "",
    birthday: "",
    spousename: "",
    bloodgroup: "",
    nid: "",
    mobilenum: "",
    education: "",
    religion: "",
    presentaddress: "",
    parmanentaddress: "",
    subscriptionpayment: "",
    regifee: "",
  };
  const [file, setFile] = useState([]); // imageupload useState
  const [memberInputData, setMemberInputData] = useState(initialObj); //input useState
  const [noticeMsg, setNoticeMsg] = useState(null); //success message useState
  // const [employeeList, setEmployeeList] = useState([]);

  // input onchange function
  const handleOnChangeInput = (event) => {
    setMemberInputData({
      ...memberInputData,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit buttion
  const handleSubmit = (event) => {
    setNoticeMsg("✔ Member Added Successfully");
    setTimeout(() => {
      setNoticeMsg(null);
    }, 1500);
    Axios.post("http://localhost:5000/api/memberadd", {
      catagory: memberInputData.catagory,
      factory: memberInputData.factory,
      union: memberInputData.union,
      joiningdate: memberInputData.joiningdate,
      factoryjoindate: memberInputData.factoryjoindate,
      uniondesignation: memberInputData.uniondesignation,
      department: memberInputData.department,
      factoryid: memberInputData.factoryid,
      factorydesignation: memberInputData.factorydesignation,

      wpcdesignation: memberInputData.wpcdesignation,
      oshcommiteedesignation: memberInputData.oshcommiteedesignation,
      memberstatus: memberInputData.memberstatus,
      ispaid: memberInputData.ispaid,
      fname: memberInputData.fname,
      lname: memberInputData.lname,
      fullname: memberInputData.fullname,
      fathername: memberInputData.fathername,
      mothername: memberInputData.mothername,

      gender: memberInputData.gender,
      birthday: memberInputData.birthday,
      spousename: memberInputData.spousename,
      bloodgroup: memberInputData.bloodgroup,
      nid: memberInputData.nid,
      mobilenum: memberInputData.mobilenum,
      education: memberInputData.education,
      religion: memberInputData.religion,

      presentaddress: memberInputData.presentaddress,
      parmanentaddress: memberInputData.parmanentaddress,
      subscriptionpayment: memberInputData.subscriptionpayment,
      regifee: memberInputData.regifee,
    });
    event.preventDefault();
    console.log(memberInputData);
    setMemberInputData(initialObj);
    clearField();
  };

  // upload image function
  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  // payment month and year
  const monthObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const date = new Date();
  let yearOfSub = date.getFullYear();
  let monthOfSub = date.getMonth() + 1;
  let strMonth = monthOfSub.toString();
  let monthName = monthObj[strMonth];
  let subDateInfo = [monthName, yearOfSub].join("-");

  // clear form field
  const clearField = () => {
    document.getElementById("memberRegistration").reset();
  };

  return (
    <>
      <div className="member-container">
        <div className="member-top-header">
          <h2>Membership information</h2>
          <hr />
        </div>
        <div className="inner-member-container">
          <form>
            <div className="form-group preview">
              {file.length > 0 &&
                file.map((item, index) => {
                  return (
                    <div key={item}>
                      <img src={item} alt="" />
                      <button type="button" onClick={() => deleteFile(index)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>

            <div className="form-group">
              <input
                type="file"
                disabled={file.length === 5}
                className="form-control"
                onChange={uploadSingleFile}
                multiple
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={upload}
            >
              Upload
            </button>
          </form>

          {/* About memeber information */}
          <div className="member-input-info">
            <h4>
              <i>
                <AiOutlineUserAdd />
              </i>
              About Member
              <hr />
            </h4>
            <form
              action=""
              className="member-regi-form"
              id="memberRegistration"
            >
              <div className="rapper">
                <div>
                  <div> Catagory</div>
                  <input
                    type="text"
                    placeholder="Catagory"
                    name="catagory"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Factory</div>
                  <input
                    type="text"
                    placeholder="Factory"
                    name="factory"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Union</div>
                  <input
                    type="text"
                    placeholder="Union"
                    name="union"
                    onChange={handleOnChangeInput}
                  />
                </div>
              </div>
              <div className="rapper">
                <div>
                  <div>Joining Date</div>
                  <input
                    type="date"
                    name="joiningdate"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Factory Join Date</div>
                  <input
                    type="date"
                    name="factoryjoindate"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Union Designation</div>
                  <input
                    type="text"
                    placeholder="Union Designation"
                    name="uniondesignation"
                    onChange={handleOnChangeInput}
                  />
                </div>
              </div>

              <div className="rapper">
                <div>
                  <div>Department</div>
                  <input
                    type="text"
                    placeholder="Department"
                    name="department"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Factory ID No</div>
                  <input
                    type="text"
                    placeholder="Factory ID No"
                    name="factoryid"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Factory Designation</div>
                  <input
                    type="text"
                    placeholder="Factory Designation"
                    name="factorydesignation"
                    onChange={handleOnChangeInput}
                  />
                </div>
              </div>

              <div className="rapper">
                <div>
                  <div>WPC Designation</div>
                  <input
                    type="text"
                    placeholder="WPC Designation"
                    name="wpcdesignation"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>OSH Commitee Designation</div>
                  <input
                    type="text"
                    placeholder="OSH Commitee Designation"
                    name="oshcommiteedesignation"
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div>
                  <div>Member Status</div>
                  <input
                    type="text"
                    placeholder="Membership Status"
                    name="memberstatus"
                    onChange={handleOnChangeInput}
                  />
                </div>
              </div>
              <div className="member-ispaid-checkbox">
                <span style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="checkbox"
                    id="ispaid-checkbox"
                    name="ispaid"
                    onChange={handleOnChangeInput}
                  />{" "}
                  <label htmlFor="">is paid</label>
                </span>
              </div>

              <div className="member-personal-information">
                <h4>
                  <i>
                    <FaRegAddressCard />
                  </i>{" "}
                  Personal Info & Address
                  <hr />
                </h4>

                <div className="rapper">
                  <div>
                    <div>First Name (English)</div>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Last Name (English)</div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Full Name (Other Lang.)</div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="fullname"
                      onChange={handleOnChangeInput}
                    />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Father Name</div>
                    <input
                      type="text"
                      placeholder="Father Name"
                      name="fathername"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Mother Name</div>
                    <input
                      type="text"
                      placeholder="Mother Name"
                      name="mothername"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Gender</div>
                    <input
                      type="text"
                      placeholder="Gender"
                      id="gender-list"
                      name="gender"
                      onChange={handleOnChangeInput}
                    />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Date Of Birth</div>
                    <input
                      type="date"
                      name="birthday"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Spouse Name</div>
                    <input
                      type="text"
                      placeholder="Spouse Name"
                      name="spousename"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Blood Group</div>
                    <input
                      type="text"
                      placeholder="Blood Group"
                      name="bloodgroup"
                      onChange={handleOnChangeInput}
                    />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>NID</div>
                    <input
                      type="text"
                      placeholder="NID"
                      name="nid"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Mobile No</div>
                    <input
                      type="text"
                      placeholder="Mobile No"
                      name="mobilenum"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Education</div>
                    <input
                      type="text"
                      placeholder="Education"
                      name="education"
                      onChange={handleOnChangeInput}
                    />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Religion</div>
                    <input
                      type="text"
                      placeholder="Religion"
                      name="religion"
                      onChange={handleOnChangeInput}
                    />
                  </div>

                  <div>
                    <div>Present Address</div>
                    <textarea
                      id=""
                      name="presentaddress"
                      rows="4"
                      cols="26"
                      placeholder="Present Adress"
                      onChange={handleOnChangeInput}
                    ></textarea>
                  </div>

                  <div>
                    <div>Permanent Address</div>
                    <textarea
                      id=""
                      name="parmanentaddress"
                      rows="4"
                      cols="26"
                      placeholder="Permanent Address"
                      onChange={handleOnChangeInput}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="payment-info">
                <h4>
                  <i>
                    <GrCurrency />
                  </i>{" "}
                  Payment
                </h4>
                <hr />

                <div className="payment-section">
                  <div className="member-subscription">
                    <span style={{ whiteSpace: "nowrap" }}>
                      <input
                        type="checkbox"
                        name="subscriptionpayment"
                        onChange={handleOnChangeInput}
                      />{" "}
                      <label htmlFor="">
                        Pay Subscription Fee- 10 Taka for
                        {" " + subDateInfo}
                      </label>
                    </span>
                  </div>

                  <div className="regi-fee">
                    <span style={{ whiteSpace: "nowrap" }}>
                      <input
                        type="checkbox"
                        name="regifee"
                        onChange={handleOnChangeInput}
                      />
                      <label htmlFor=""> Pay Registration Fee- 50 Taka</label>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <hr />

        <div className="member-regi-button">
          <p>{noticeMsg}</p>

          <button type="submit" onClick={handleSubmit}>
            Save Changes
          </button>
          <button type="reset" onClick={clearField}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Member;
