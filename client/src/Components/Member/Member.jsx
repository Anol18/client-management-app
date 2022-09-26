import "./Member.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import React, { useState } from "react";

function Member() {
  const [file, setFile] = useState([]);

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
            <form action="" className="member-regi-form">
              <div className="rapper">
                <div>
                  <div> Catagory</div>
                  <input type="text" placeholder="Catagory" />
                </div>

                <div>
                  <div>Factory</div>
                  <input type="text" placeholder="Factory" />
                </div>

                <div>
                  <div>Union</div>
                  <input type="text" placeholder="Union" />
                </div>
              </div>
              <div className="rapper">
                <div>
                  <div>Joining Date</div>
                  <input type="date" />
                </div>

                <div>
                  <div>Factory Join Date</div>
                  <input type="date" />
                </div>

                <div>
                  <div>Union Designation</div>
                  <input type="text" placeholder="Union Designation" />
                </div>
              </div>

              <div className="rapper">
                <div>
                  <div>Department</div>
                  <input type="text" placeholder="Department" />
                </div>

                <div>
                  <div>Factory ID No</div>
                  <input type="text" placeholder="Factory ID No" />
                </div>

                <div>
                  <div>Factory Designation</div>
                  <input type="text" placeholder="Factory Designation" />
                </div>
              </div>

              <div className="rapper">
                <div>
                  <div>WPC Designation</div>
                  <input type="text" placeholder="WPC Designation" />
                </div>

                <div>
                  <div>OSH Commitee Designation</div>
                  <input type="text" placeholder="OSH Commitee Designation" />
                </div>

                <div>
                  <div>OSH Commitee Designation</div>
                  <input type="text" placeholder="Membership Status *" />
                </div>
              </div>
              <div className="member-ispaid-checkbox">
                <input type="checkbox" id="ispaid-checkbox" /> is paid
              </div>

              <div className="member-personal-information">
                <h4>
                  <i>
                    <FaRegAddressCard />
                  </i>{" "}
                  Personal Info & Address
                </h4>
                <hr />
                <div className="rapper">
                  <div>
                    <div>First Name (English)</div>
                    <input type="text" placeholder="First Name" required />
                  </div>

                  <div>
                    <div>Last Name (English)</div>
                    <input type="text" placeholder="Last Name" />
                  </div>

                  <div>
                    <div>Fullname (Other Lang.)</div>
                    <input type="text" placeholder="Fullname" />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Father Name</div>
                    <input type="text" placeholder="Father Name" />
                  </div>

                  <div>
                    <div>Mother Name</div>
                    <input type="text" placeholder="Mother Name" />
                  </div>

                  <div>
                    <div>Gender</div>
                    <input type="text" placeholder="Gender" />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Date Of Birth</div>
                    <input type="date" />
                  </div>

                  <div>
                    <div>Spouse Name</div>
                    <input type="text" placeholder="Spouse Name" />
                  </div>

                  <div>
                    <div>Blood Group</div>
                    <input type="text" placeholder="Blood Group" />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>NID</div>
                    <input type="text" placeholder="NID" />
                  </div>

                  <div>
                    <div>Mobile No</div>
                    <input type="text" placeholder="Mobile No" />
                  </div>

                  <div>
                    <div>Education</div>
                    <input type="text" placeholder="Education" />
                  </div>
                </div>

                <div className="rapper">
                  <div>
                    <div>Religion</div>
                    <input type="text" placeholder="Religion" />
                  </div>

                  <div>
                    <div>Present Address</div>
                    <textarea
                      id=""
                      name=""
                      rows="4"
                      cols="26"
                      placeholder="Present Adress"
                    ></textarea>
                  </div>

                  <div>
                    <div>Permanent Address</div>
                    <textarea
                      id=""
                      name=""
                      rows="4"
                      cols="26"
                      placeholder="Permanent Address"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
