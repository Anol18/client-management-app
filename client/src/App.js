import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header/header"
// import Navbar from "./Components/Navbar/navbar";
import Login from ".//Components/Login/login";
// import Contact from "./Components/Contact/contact";
// import Home from "./Components/Home/home";
// import Notice from "./Components/Notice/Notice";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashbord/Dashbord";
import Security from "./Components/Security/Security";
import Member from "./Components/Member/Member";
import Accounts from "./Components/Accounts/Accounts";

function App() {
  return (
    <>
      <Login />
      <Router>
        <Sidebar>
          <Routes>
            {/* <Route path='/' element={<Login/>}/> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/security" element={<Security />} />
            <Route path="/member" element={<Member />} />
            <Route path="/Accounts" element={<Accounts />} />
          </Routes>
        </Sidebar>
      </Router>
      {/* <Header/> */}
      {/* <Navbar/> */}

      {/* <Contact/> */}
      {/* <Home/> */}
      {/* <Notice/> */}
    </>
  );
}

export default App;
