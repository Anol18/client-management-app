const MemberRegi = function () {
  app.post("/api/memberadd", (req, res) => {
    const catagory = req.body.catagory;
    const factory = req.body.factory;
    const union = req.body.union;
    const joiningdate = req.body.joiningdate;
    const factoryjoindate = req.body.factoryjoindate;
    const uniondesignation = req.body.uniondesignation;
    const department = req.body.department;
    const factoryid = req.body.factoryid;
    const factorydesignation = req.body.factorydesignation;
    const wpcdesignation = req.body.wpcdesignation;
    const oshcommiteedesignation = req.body.oshcommiteedesignation;
    const memberstatus = req.body.memberstatus;
    const ispaid = req.body.ispaid;
    const fname = req.body.fname;
    const lname = req.body.lname;

    const fullname = req.body.fullname;
    const fathername = req.body.fathername;
    const mothername = req.body.mothername;

    const gender = req.body.gender;
    const birthday = req.body.birthday;
    const spousename = req.body.spousename;
    const bloodgroup = req.body.bloodgroup;
    const nid = req.body.nid;

    const mobilenum = req.body.mobilenum;
    const education = req.body.education;
    const religion = req.body.religion;
    const presentaddress = req.body.presentaddress;
    const parmanentaddress = req.body.parmanentaddress;
    const subscriptionpayment = req.body.subscriptionpayment;
    const regifee = req.body.regifee;
    const sql =
      "INSERT INTO `membership_info`(`photo_ref`, `catagory`, `factory`, `m_union`, `joning_date`, `factory_join_date`, `union_designation`, `department`, `factory_id_no`, `factory_designation`, `wpc_designation`, `osh_commitee_designation`, `membership_status`, `is_paid`, `f_name`, `l_name`, `full_name`, `father_name`, `mother_name`, `gender`, `date_of_birth`, `spouse_name`, `blood_group`, `nid`, `mobile_number`, `education`, `religion`, `present_address`, `permanent_address`) VALUES ('image',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(
      sql,
      [
        catagory,
        factory,
        union,
        joiningdate,
        factoryjoindate,
        uniondesignation,
        department,
        factoryid,
        factorydesignation,
        wpcdesignation,
        oshcommiteedesignation,
        memberstatus,
        ispaid,
        fname,
        lname,
        fullname,
        fathername,
        mothername,
        gender,
        birthday,
        spousename,
        bloodgroup,
        nid,
        mobilenum,
        education,
        religion,
        presentaddress,
        parmanentaddress,
        subscriptionpayment,
        regifee,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  });
};

module.exports = MemberRegi;
