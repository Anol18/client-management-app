import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header/header"
// import Navbar from "./Components/Navbar/navbar";
// import Login from ".//Components/Login/login";
// import Contact from "./Components/Contact/contact";
// import Home from "./Components/Home/home";
// import Notice from "./Components/Notice/Notice";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashbord/Dashbord";
import Security from "./Components/Security/Security";
import Member from "./Components/Member/Member";
import Accounts from "./Components/Accounts/Accounts";
// import { MdSettings } from "react-icons/md";
import Settings from "./Components/Setting/Settings";
import LoginNavbar from "./Components/LoginNavbar/LoginNavbar";
import Memberlist from "./Components/Member-list/Memberlist";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      {/* <Login /> */}
      {/* routing */}
      <BrowserRouter>
        <Sidebar>
          <LoginNavbar />
          <Routes>
            {/* <Route path='/' element={<Login/>}/> */}
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/security" element={<Security />} />
            <Route exact path="/Members" element={<Member />} />
            <Route exact path="/Memberlist" element={<Memberlist />} />

            <Route exact path="/Accounts" element={<Accounts />} />
            <Route exact path="/Settings" element={<Settings />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Navbar/> */}

      {/* <Contact/> */}
      {/* <Home/> */}
      {/* <Notice/> */}
    </>
  );
}

export default App;
